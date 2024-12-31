'use client'

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Redirect to the profile page after successful signup
      router.push('/profile');
    } catch (error) {
      setError(error.message); // Handle errors
    }
  };

  return (
      <main className='h-[calc(100vh-80px)] mt-20 grid place-items-center container main-container'>
          <div className='px-6 py-12 rounded-lg shadow-lg w-full max-w-[500px] bg-slate-100 dark:bg-slate-700'>
          <h2 className='text-2xl lg:text-3xl mb-4 poppins-medium tracking-wide'>Create an Account</h2>
              <form onSubmit={handleSubmit} className='grid gap-y-2'>
                  
                  <div className='grid gap-y-1'>
                  <label htmlFor="email" className='mb-1'>Email:</label>
         <input
          type="email"
                      value={email}
                      name='email'
                      id='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
                      required
                      className='pl-2 h-[40px] rounded border-black dark:border-gray-500'
                  />
                 </div>
                  
                 <div className='grid gap-y-1'>
                  <label htmlFor="password">Password:</label>
                  
                  <input
                    type="password"
                                value={password}
                                name='password'
                                id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                                required
                                className='pl-2 h-[40px] rounded border-black dark:border-gray-500'
                      />
                      </div>
        <button type="submit" className='mt-2 bg-blue-600 text-white h-[40px] rounded text-lg poppins-medium tracking-wide'>Sign Up</button>
      </form>
      {error && <p>{error}</p>}
          </div>
      </main>
  );
};

export default SignUp;
