'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
	const [password, setPassword] = useState('');
	const [isShaking, setIsShaking] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();
	const correctPassword = '0811936201'; 

	const handleLogin = () => {
		if (password === correctPassword) {
			setErrorMessage(''); // Clear any previous errors
			router.push('/slideshow'); // Proceed to the birthday message & slideshow
		} else {
			setIsShaking(true);
			setErrorMessage('❌ Incorrect password! Try again.');
			setTimeout(() => setIsShaking(false), 500); // Stop shaking after 500ms
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
			<h1 className='text-2xl mb-4'>Enter Password</h1>

			<motion.input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none'
				animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
				transition={{ duration: 0.3 }}
			/>

			{errorMessage && <p className='text-red-500 mt-2'>{errorMessage}</p>}

			<button
				onClick={handleLogin}
				className='mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600'
			>
				Submit
			</button>
		</div>
	);
}
