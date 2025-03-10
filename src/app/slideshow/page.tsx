'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GOOGLE_DRIVE_FOLDER_ID = '1U7fdR3VYfCWBccLrIZ5gYhm29x1giRv-';
const GOOGLE_API_KEY = 'AIzaSyBGMxlCtK1qjWujAhFIzlfbkxe7JF2B71s'; // Replace with your actual API key

export default function Slideshow() {
	const [images, setImages] = useState<string[]>([]);
	const [index, setIndex] = useState(0);
	const router = useRouter();

	// Fetch images from Google Drive folder
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents and mimeType contains 'image'&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType)`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.files) {
					const imageUrls = data.files.map(
						(file: any) =>
							`https://lh3.googleusercontent.com/d/${file.id}=s1000` // Direct Google image link
					);
					setImages(imageUrls);
				}
			})
			.catch((error) => console.error('Error fetching images:', error));
	}, []);

	// Slideshow functionality
	useEffect(() => {
		if (images.length === 0) return;

		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images]);

	// Redirect after the last image
	useEffect(() => {
		if (images.length > 0 && index === images.length - 1) {
			setTimeout(() => router.push('/view-selection'), 3000);
		}
	}, [index, images, router]);

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-black text-white text-center'>
			{images.length === 0 ? (
				<p>Loading images...</p>
			) : (
				<img
					src={images[index]}
					className='w-3/4 h-auto object-cover rounded-lg'
					alt='Slideshow'
				/>
			)}
		</div>
	);
}
