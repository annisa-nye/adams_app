import { useState } from 'react';

// This is a temporary interface for memory data
interface Memory {
	id: string;
	location: string;
	date: string;
	description: string;
	imageUrl?: string;
}

export default function MapComponent() {
	// Placeholder data - we'll replace this with real data later
	const [memories] = useState<Memory[]>([
		{
			id: '1',
			location: 'Paris, France',
			date: '2023-12-31',
			description: "New Year's Eve at the Eiffel Tower",
			imageUrl: '/placeholder.jpg',
		},
		{
			id: '2',
			location: 'New York, USA',
			date: '2023-12-25',
			description: 'Christmas in Times Square',
			imageUrl: '/placeholder.jpg',
		},
	]);

	return (
		<div className='relative h-full w-full'>
			{/* Placeholder for map */}
			<div className='absolute inset-0 bg-gray-800 p-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{memories.map((memory) => (
						<div
							key={memory.id}
							className='bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors'
						>
							<h3 className='text-xl font-bold text-white mb-2'>
								{memory.location}
							</h3>
							<p className='text-gray-300 mb-2'>{memory.date}</p>
							<p className='text-gray-400'>{memory.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
