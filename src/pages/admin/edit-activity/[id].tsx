import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

    // Fetch activity and photos from the API
    useEffect(() => {
        if (id) {
            fetchActivityDetail(id.toString());
        }
    }, [id]);

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
        // Check if the file is valid
        if (!file) {
            console.error('No file selected');
            return;
        }

        // Handle the file upload to blob storage
        const uploadedUrl = await uploadImageToBlob(file);
        if (uploadedUrl) {
            const updatedPhotos = [...photos];
            updatedPhotos[index].photo_url = uploadedUrl; // Update photo URL after upload
            setPhotos(updatedPhotos);
        }
    };

    const uploadImageToBlob = async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('image', file); // Ensure the field name matches what the server expects
            console.log('FormData:', formData.get('image')); // Log the file to verify

            const response = await fetch(`/api/uploadImage`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            return data.url; // Assume the server returns the uploaded image URL
        } catch (error) {
            console.error('Error uploading image:', error);
            return '';
        }
    };


    // Handle deleting a photo
    const handleDeletePhoto = async (photoId: string) => {
        try {
            const response = await fetch(`/api/photos/${photoId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setPhotos(photos.filter((photo) => photo.photo_id !== photoId));
            } else {
                console.error('Failed to delete photo');
            }
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
    };

    // Handle adding a new photo
    const handleAddPhoto = () => {
        setPhotos([...photos, { photo_id: '', photo_description: '', photo_url: '' }]);
    };

    // Handle saving changes (updating existing photos)
    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`/api/activities/${id}/photos`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(photos),
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

                {/* Photo Management Table */}
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
                                            onClick={() => handleDeletePhoto(photo.photo_id)}
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
                </div>
            </div>
        </div>
    );
}
