"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const slideshowImages = [
	'https://drive.google.com/uc?export=view&id=FILE_ID_1',
	'https://drive.google.com/uc?export=view&id=FILE_ID_2',
	'https://drive.google.com/uc?export=view&id=FILE_ID_3',
];

export default function Slideshow() {
	const [index, setIndex] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (index === slideshowImages.length - 1) {
			setTimeout(() => router.push('/view-selection'), 3000);
		}
	}, [index, router]);

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
			<img
				src={slideshowImages[index]}
				className='w-3/4 h-auto object-cover rounded-lg'
			/>
		</div>
	);
}
