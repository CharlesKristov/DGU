
import ActivityCard from '@/components/ActivityCard'
import { useEffect, useState } from 'react';


export default function Activities() {
    // Define the Activity type
    type Activity = {
        activity_id: string;
        brand_name: string;
        store_name: string;
        photo_url: string;
    };

    const [activityData, setActivityData] = useState<Activity[]>([]);

    useEffect(() => {
        // Fetch data from the API
        async function fetchActivities() {
          const response = await fetch('/api/activities');
          const data = await response.json();
          setActivityData(data);
        }
    
        fetchActivities();
      }, []); 


    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                
                {/* Activities Section */}
                <div className="mt-2">
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        Our Activities
                    </h2>
                </div>

                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    We are actively providing goods all over Indonesia.
                </div>
                

                <section className="mx-auto my-12 w-[75%] max-md:mx-5 max-md:w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto justify-items-center place-content-center">
                        {activityData.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            brandName={activity.brand_name}
                            storeName={activity.store_name}
                            imageSrc={activity.photo_url}
                            href={"/activities/"+activity.activity_id}
                        />
                        ))}
                    </div>
                </section>

                
            </div>
        </div>
    )
}