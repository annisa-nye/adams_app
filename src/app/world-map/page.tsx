'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// We need to dynamically import the map component because Leaflet requires window object
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
	ssr: false,
	loading: () => (
		<div className='flex items-center justify-center h-screen bg-gray-900'>
			<div className='text-white text-2xl'>Loading map...</div>
		</div>
	),
});

export default function WorldMap() {
	return (
		<div className='h-screen w-full bg-gray-900'>
			<MapComponent />
		</div>
	);
}
