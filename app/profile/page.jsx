'use client'

import { useEffect, useState } from 'react';
import { auth } from '@/firebase'; // Your Firebase config
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // If you're using Next.js for routing

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is signed in, set user state
      } else {
        setUser(null); // User is not signed in
        router.push('/login'); // Redirect to login page
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return (
      <div>
        <h2>Redirecting to login...</h2>
      </div>
    );
  }

  return (
    <div className='mt-20'>
      <h2>Your Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>UID:</strong> {user.uid}</p>
      <p><strong>Display Name:</strong> {user.displayName || 'No display name set'}</p>
      <p><strong>Photo URL:</strong> {user.photoURL || 'No photo available'}</p>
    </div>
  );
};

export default Profile;
