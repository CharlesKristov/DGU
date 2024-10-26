import { Button } from '@/components/ui/button';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      // Check if the user has the 'admin' role
      if (session.user.role === 'admin') {
        setIsAuthorized(true);
      } else {
        router.push('/'); // Redirect if not authorized
        signOut();
      }
    }
  }, [status, session, router]);

  if (status === 'loading') return <p className='items-center'>Loading...</p>;

  if (!session) {
    return (
      <div className='flex flex-col items-center m-3 h-96'>
        <h2 className='mb-5'>Welcome to Admin Page</h2>
        <h3>Please login using your registered Google account.</h3>
        <h4>If you haven&apos;t registered, please contact our IT support.</h4>
        <Button className='mt-16' onClick={() => signIn('google')}>Sign in with Google</Button>
      </div>
    );
  }

  if (!isAuthorized) return <p>Checking authorization...</p>;

  const handleManageActivities = () => {
    router.push('/admin/manage-activities'); // Navigate to manage activities page
  };

  // const handleManageProducts = () => {
  //   router.push('/admin/manage-products'); // Navigate to manage products page
  // };

  // Add more handlers as needed for other items

  return (
    <div className='flex flex-col items-center m-3 h-96'>
      <h1>Welcome to the Admin Page</h1>
      <p>{`Hello, ${session.user.name}`}</p>

      <div className="flex flex-col text-center w-1/2">
        <h2 className="mt-4 items-center">Manage Items:</h2>
        <div className="flex flex-col items-center mt-2">
          <Button onClick={handleManageActivities} className="mb-2 w-1/4">
            Manage Activities
          </Button>
          
          {/* <Button onClick={handleManageProducts} className="mb-2 w-1/4">
            Manage Products
          </Button>
          <Button onClick={() => alert('Manage Other Item')} className="mb-2 w-1/4">
            Manage Other Item
          </Button>
           */}

        </div>
      </div>
    </div>
  );
}
