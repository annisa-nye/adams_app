'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
	const [password, setPassword] = useState('');
	const [isShaking, setIsShaking] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const router = useRouter();
	const correctPassword = '000'; // Your dad's phone number

	const handleLogin = () => {
		if (password === correctPassword) {
			setErrorMessage(''); // Clear any previous errors
			setShowMessage(true); // Show birthday message
		} else {
			setIsShaking(true);
			setErrorMessage('❌ Incorrect password! Try again.');
			setTimeout(() => setIsShaking(false), 500); // Stop shaking after 500ms
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleLogin();
		}
	};

	// Redirect to slideshow
	const handleContinue = () => {
		window.location.href = '/slideshow';
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
			{showMessage ? (
				<motion.div
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className='text-3xl font-bold animate-pulse mb-8'>
						🎉 Happy 24th Birthday, Adam! 🎉
					</h1>
					<Image
						src='/slideshow/adam_0.JPG'
						alt='Birthday Image'
						width={500}
						height={300}
						className='rounded-lg shadow-lg mb-8'
						priority
					/>
					<motion.button
						onClick={handleContinue}
						className='mt-4 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold text-lg shadow-lg cursor-pointer'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Continue to Slideshow →
					</motion.button>
				</motion.div>
			) : (
				<>
					<h1 className='text-2xl mb-4'>Enter Password</h1>

					<motion.input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={handleKeyPress}
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
				</>
			)}
		</div>
	);
}
