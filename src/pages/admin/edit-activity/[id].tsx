import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

// Define the types for activity and photo data
interface PhotoData {
    photo_id: string;
    photo_description: string;
    photo_url: string;
}

interface Activity {
    activity_id: string;
    store_name: string;
    activity_description: string;
}

export default function ActivityDetail() {
    const router = useRouter();
    const { id } = router.query; // Get the activity ID from the URL
    const [activity, setActivity] = useState<Activity | null>(null);
    const [photos, setPhotos] = useState<PhotoData[]>([]); // Array of PhotoData
    
    const { data: session, status } = useSession();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control modal
    const [photoToDelete, setPhotoToDelete] = useState<PhotoData | null>(null); // Track which photo to delete

    useEffect(() => {
        if (status === 'authenticated') {
            if (session.user.role === 'admin') {
                setIsAuthorized(true);
            } else {
                router.push('/');
                signOut();
            }
        }
    }, [status, session, router]);

    
    
    // Fetch activity and photos from the API
    useEffect(() => {
        if (id) {
            fetchActivityDetail(id.toString());
        }
    }, [id]);

    if (status === 'loading') return <p className='items-center'>Loading...</p>;

    if (!session) {
      router.push('/');
    }
  
    if (!isAuthorized) return <p>Checking authorization...</p>;

    async function fetchActivityDetail(activityId: string) {
        try {
            const response = await fetch(`/api/activities/${activityId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch activity details');
            }
            const data = await response.json();
            if (data.length > 0) {
                const activityData = {
                    activity_id: data[0].activity_id,
                    store_name: data[0].store_name,
                    activity_description: data[0].activity_description,
                };
                const photosData = data.map((item: { photo_id: string; photo_description: string; photo_url: string; }) => ({
                    photo_id: item.photo_id,
                    photo_description: item.photo_description,
                    photo_url: item.photo_url,
                }));
                setActivity(activityData);
                setPhotos(photosData);
            }
        } catch (error) {
            console.error('Error fetching activity details:', error);
        }
    }

    // Handle description change
    const handleDescriptionChange = (index: number, newDescription: string) => {
        const updatedPhotos = [...photos];
        updatedPhotos[index].photo_description = newDescription;
        setPhotos(updatedPhotos);
    };

    // Handle photo file upload
    const handlePhotoFileChange = async (index: number, file: File) => {
        if (!file) {
            console.error('No file selected');
            return;
        }

        const uploadedUrl = await uploadImageToBlob(file);
        if (uploadedUrl) {
            const updatedPhotos = [...photos];
            updatedPhotos[index].photo_url = uploadedUrl;
            setPhotos(updatedPhotos);
        }
    };

    const uploadImageToBlob = async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch(`/api/uploadImage`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            return data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return '';
        }
    };

    // Show confirmation modal when attempting to delete
    const handleConfirmDeletePhoto = (photo: PhotoData) => {
        setPhotoToDelete(photo);
        setShowDeleteModal(true);
    };

    // Proceed with deletion after confirmation
    const confirmDeletePhoto = () => {
        if (!photoToDelete) return;

        // Remove the photo from the photos array
        const updatedPhotos = photos.filter((photo) => photo.photo_id !== photoToDelete.photo_id);
        setPhotos(updatedPhotos);
        setShowDeleteModal(false); // Close the modal after deletion
        setPhotoToDelete(null); // Reset the selected photo
    };

    // Handle adding a new photo
    const handleAddPhoto = () => {
        setPhotos([...photos, { photo_id: '', photo_description: '', photo_url: '' }]);
    };

    // Handle saving changes 
    const handleSaveChanges = async () => {
        try {
            // Ensure the activity ID is available
            if (!id) {
                console.error("Activity ID is missing");
                return;
            }

            const response = await fetch(`/api/activities/photos/${id}/save`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    photos,
                    user: {
                        email: session?.user.email,
                        role: session?.user.role,
                        id: session?.user.id
                    },
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save changes');
            }

            alert('Changes saved successfully');
        } catch (error) {
            console.error('Error saving changes:', error);
        }
    };


    if (!activity) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mt-2">
                    <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                        {activity.store_name}
                    </h2>
                </div>
                <div className="mt-1.5 text-base leading-9 text-secondary-black text-center">
                    {activity.activity_description}
                </div>
                

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Manage Photos</h3>
                    <table className="min-w-full bg-white shadow-md rounded">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">#</th>
                                <th className="py-2 px-4">Description</th>
                                <th className="py-2 px-4">Photo</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {photos.map((photo, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 text-center">{index + 1}</td>
                                    <td className="py-2 px-4">
                                        <input
                                            type="text"
                                            value={photo.photo_description}
                                            onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                            className="border p-1 w-full"
                                        />
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="flex items-center">
                                            {photo.photo_url && (
                                                <Image
                                                    src={photo.photo_url}
                                                    alt={`Photo ${index + 1}`}
                                                    width={100}
                                                    height={100}
                                                    objectFit="cover"
                                                    className="mr-2"
                                                />
                                            )}
                                            <input
                                                type="file"
                                                onChange={(e) =>
                                                    e.target.files &&
                                                    handlePhotoFileChange(index, e.target.files[0])
                                                }
                                                className="border p-1 w-full"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <button
                                            onClick={() => handleConfirmDeletePhoto(photo)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        onClick={handleAddPhoto}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New Photo
                    </button>

                    <button
                        onClick={handleSaveChanges}
                        className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Save Changes
                    </button>
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()} // Navigates back to the previous page
                        className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Back
                    </button>
                </div>

                {/* Confirmation modal */}
                {showDeleteModal && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-4 rounded shadow-md">
                            <p>Are you sure you want to delete this photo?</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={confirmDeletePhoto}
                                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Yes, delete
                                </button>
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="bg-gray-300 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
