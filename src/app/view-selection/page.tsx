'use client';

import { useRouter } from 'next/navigation';

export default function ViewSelection() {
	const router = useRouter();

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
			<h1 className='text-3xl mb-6'>
				How would you like to view the memories?
			</h1>
			<button
				onClick={() => router.push('/world-map')}
				className='mb-4 px-6 py-3 bg-blue-500 rounded'
			>
				🌍 World View
			</button>
			<button
				onClick={() => router.push('/timeline')}
				className='px-6 py-3 bg-yellow-500 rounded'
			>
				📅 Chronological View
			</button>
		</div>
	);
}
