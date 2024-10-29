// /pages/activities/[id].tsx
import ActivityCard from '@/components/ActivityCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ActivityDetail() {
    type Activity = {
        activity_id: string;
        brand_name: string;
        store_name: string;
        photo_url: string;
        photo_description: string;
        activity_description: string;
    };
    const router = useRouter();
    const { id } = router.query; // Get the activity ID from the URL
    const [activity, setActivity] = useState<Activity[]>([]);

    useEffect(() => {
        // Only fetch the activity detail when the ID is present
        if (id) {
            fetchActivityDetail(id.toString());
        }
    }, [id]);

    // Define the fetch function outside of the if block
    async function fetchActivityDetail(activityId: string) {
        try {
            const response = await fetch(`/api/activities/${activityId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setActivity(data);
        } catch (error) {
            console.error("Failed to fetch activity details:", error);
        }
    }

    if (!activity) {
        return <div>Loading...</div>; // Show a loading state while fetching
    }

    console.log(activity[0]?.store_name);

    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                
                {/* Activities Section */}
                <div className="mt-2">
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        {activity[0]?.store_name}
                    </h2>
                </div>

                <div className="mt-1.5 text-base leading-9 text-secondary-black text-center">
                    {activity[0]?.activity_description}
                </div>
                

                <section className="mx-auto my-12 w-[75%] max-md:w-full max-md:mx-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto justify-items-center place-content-center">
                        {activity.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            brandName={activity.store_name}
                            storeName={activity.photo_description}
                            imageSrc={activity.photo_url}
                            href={"nolink"}
                        />
                        ))}
                    </div>
                </section>

                
            </div>
        </div>
    );
}
