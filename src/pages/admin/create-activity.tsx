import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

// Define the types for photo data
interface PhotoData {
    photo_description: string;
    photo_url: string;
    photo_uploaded: boolean; // Added to track whether the image was uploaded or entered via URL
}

export default function CreateActivity() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [photos, setPhotos] = useState<PhotoData[]>([]); // Array of PhotoData
    const [activity, setActivity] = useState({
        brand_name: '',
        store_name: '',
        activity_description: '',
    });

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

    if (status === 'loading') return <p>Loading...</p>;

    if (!session) {
        router.push('/');
    }

    if (!isAuthorized) return <p>Checking authorization...</p>;

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
            updatedPhotos[index].photo_uploaded = true; // Set flag to indicate the image was uploaded
            setPhotos(updatedPhotos);
        }
    };

    // Handle image URL change
    const handlePhotoUrlChange = (index: number, newUrl: string) => {
        const updatedPhotos = [...photos];
        updatedPhotos[index].photo_url = newUrl;
        updatedPhotos[index].photo_uploaded = false; // Set flag to indicate the URL was manually entered
        setPhotos(updatedPhotos);
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

    // Handle adding a new photo
    const handleAddPhoto = () => {
        setPhotos([...photos, { photo_description: '', photo_url: '', photo_uploaded: false }]);
    };

    // Handle deleting a photo
    const handleDeletePhoto = (index: number) => {
        const updatedPhotos = photos.filter((_, photoIndex) => photoIndex !== index);
        setPhotos(updatedPhotos);
    };

    // Handle saving new activity
    const handleSaveActivity = async () => {
        try {
            const response = await fetch(`/api/activities/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    activity,
                    photos,
                    user: {
                        email: session?.user.email,
                        role: session?.user.role,
                        id: session?.user.id,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create activity');
            }

            alert('Activity created successfully');
            router.push('/admin/manage-activities'); // Redirect to activities list or other page after creation
        } catch (error) {
            console.error('Error creating activity:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Create New Activity</h2>

                <div className="mt-2">
                    {/* Label for Brand Name */}
                    <label className="block text-sm font-medium text-gray-700">Brand Name</label>
                    <input
                        type="text"
                        value={activity.brand_name}
                        onChange={(e) => setActivity({ ...activity, brand_name: e.target.value })}
                        className="text-3xl font-bold leading-10 text-primary-black text-start w-full border p-2"
                        placeholder="Enter Brand Name"
                    />
                </div>

                <div className="mt-2">
                    {/* Label for Store Name */}
                    <label className="block text-sm font-medium text-gray-700">Store Name</label>
                    <input
                        type="text"
                        value={activity.store_name}
                        onChange={(e) => setActivity({ ...activity, store_name: e.target.value })}
                        className="text-3xl font-bold leading-10 text-primary-blue text-start w-full border p-2"
                        placeholder="Enter Store Name"
                    />
                </div>

                <div className="mt-2">
                    {/* Label for Activity Description */}
                    <label className="block text-sm font-medium text-gray-700">Activity Description</label>
                    <textarea
                        value={activity.activity_description}
                        onChange={(e) =>
                            setActivity({ ...activity, activity_description: e.target.value })
                        }
                        className="mt-1.5 text-base leading-9 text-secondary-black text-start w-full border p-2"
                        placeholder="Enter Activity Description"
                    />
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Add Photos</h3>
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
                                            <input
                                                type="text"
                                                value={photo.photo_url}
                                                onChange={(e) => handlePhotoUrlChange(index, e.target.value)}
                                                placeholder="Enter image URL"
                                                className="border p-1 w-full ml-2"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <button
                                            onClick={() => handleDeletePhoto(index)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
                        onClick={handleSaveActivity}
                        className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Save Activity
                    </button>

                    {/* Back Button */}
                    <button
                        onClick={() => router.back()} // Navigates back to the previous page
                        className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}
