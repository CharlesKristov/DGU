import { Button } from '@/components/ui/button';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control modal
  const [activityToDelete, setActivityToDelete] = useState<string | null>(null); // ID of activity to delete

  type Activity = {
    activity_id: string;
    brand_name: string;
    store_name: string;
    activity_description: string;
    photo_url: string;
  };

  useEffect(() => {
    // Fetch data from the API
    async function fetchActivities() {
      const response = await fetch('/api/activities');
      const data = await response.json();
      setActivities(data);
    }

    fetchActivities();
  }, []);

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

  const handleEditActivity = (activityId: string) => {
    router.push(`/admin/edit-activity/${activityId}`); // Navigate to edit page
  };

  const handleDeleteActivity = async (activityToDelete: string) => {
    if (activityToDelete) {
      try {
        const response = await fetch(`/api/activities/${activityToDelete}/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: { id: session?.user.id, role: session?.user.role } }),
        });

        if (response.ok) {
          // Remove the deleted activity from the local state
          setActivities(prevActivities => prevActivities.filter(activity => activity.activity_id !== activityToDelete));
          setShowDeleteModal(false); // Close the modal after deletion
          setActivityToDelete(null); // Reset the activity to delete
          alert('Success delete activity.');

        } else {
          const errorData = await response.json();
          console.error('Error deleting activity:', errorData.message);
          alert('Failed to delete activity. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting activity:', error);
        alert('An error occurred while deleting the activity. Please try again.');
      }
    }
  };

  const handleCreateActivity = () => {
    router.push('/admin/create-activity'); // Navigate to create page
  };

  if (status === 'loading') return <p className='items-center'>Loading...</p>;

  if (!session) {
    router.push('/');
  }

  if (!isAuthorized) return <p>Checking authorization...</p>;

  return (
    <div className='flex flex-col items-center m-3 text-start justify-center'>
      <div className="w-3/4">
        <h2 className="mt-4">Manage Activities</h2>
        <hr />

        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-center w-1/4">Store Name</th>
              <th className="border px-4 py-2 text-center w-1/4">Brand Name</th>
              <th className="border px-4 py-2 text-center w-1/4">Activity Name</th>
              <th className="border px-4 py-2 text-center w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{activity.store_name}</td>
                  <td className="border px-4 py-2">{activity.brand_name}</td>
                  <td className="border px-4 py-2">{activity.activity_description}</td>
                  <td className="border px-4 py-2 text-center">
                    <Button onClick={() => handleEditActivity(activity.activity_id)} className="text-center mr-2">Edit</Button>
                    <Button onClick={() => { setActivityToDelete(activity.activity_id); setShowDeleteModal(true); }} className="text-center bg-red-500 text-white">Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center border px-4 py-2">No activities found.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-end">
          <Button className="mt-4" onClick={handleCreateActivity}>Create New Activity</Button>
        </div>
      </div>

      {/* Confirmation Modal for Deletion */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Are you sure you want to delete this activity?</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => handleDeleteActivity(activityToDelete!)} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                Yes, delete
              </Button>
              <Button onClick={() => setShowDeleteModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
