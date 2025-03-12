'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slideshow() {
	const [currentImageIndex, setCurrentImageIndex] = useState(1);
	const totalImages = 24;

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex((prev) => (prev === totalImages ? prev : prev + 1));
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4'>
			<AnimatePresence mode='wait'>
				<motion.div
					key={currentImageIndex}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
					className='relative'
				>
					<Image
						src={`/slideshow/adam_${currentImageIndex}.jpg`}
						alt={`Memory ${currentImageIndex}`}
						width={800}
						height={600}
						className='rounded-lg shadow-xl'
						priority
					/>
					<div className='absolute bottom-4 right-4 bg-black bg-opacity-50 px-3 py-1 rounded-full text-white'>
						{currentImageIndex} / {totalImages}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
