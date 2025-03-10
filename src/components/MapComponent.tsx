import { useState } from 'react';
import Image from 'next/image';
import { imageData } from '../data/images';

export default function MapComponent() {
	const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [selectedYear, setSelectedYear] = useState<string | null>(null);

	const countries = Object.keys(imageData);

	const cities = selectedCountry
		? Object.keys(imageData[selectedCountry as keyof typeof imageData])
		: [];

	const years =
		selectedCity && selectedCountry
			? Object.keys(
					imageData[selectedCountry as keyof typeof imageData][
						selectedCity as any
					]
			  )
			: [];

	const images =
		selectedCountry && selectedCity && selectedYear
			? imageData[selectedCountry as keyof typeof imageData][
					selectedCity as any
			  ][selectedYear]
			: [];

	return (
		<div className='relative h-full w-full'>
			<div className='absolute inset-0 bg-gray-800 p-4'>
				<div className='grid grid-cols-1 gap-4'>
					<div className='bg-gray-700 rounded-lg p-4'>
						<div className='flex flex-wrap gap-2 mb-4'>
							{countries.map((country) => (
								<button
									key={country}
									className={`px-4 py-2 rounded ${
										selectedCountry === country
											? 'bg-blue-600'
											: 'bg-gray-600 hover:bg-gray-500'
									} text-white`}
									onClick={() => {
										setSelectedCountry(
											selectedCountry === country ? null : country
										);
										setSelectedCity(null);
										setSelectedYear(null);
									}}
								>
									{country}
								</button>
							))}
						</div>

						{selectedCountry && (
							<div className='flex flex-wrap gap-2 mb-4'>
								{cities.map((city) => (
									<button
										key={city}
										className={`px-4 py-2 rounded ${
											selectedCity === city
												? 'bg-blue-600'
												: 'bg-gray-600 hover:bg-gray-500'
										} text-white`}
										onClick={() => {
											setSelectedCity(selectedCity === city ? null : city);
											setSelectedYear(null);
										}}
									>
										{city}
									</button>
								))}
							</div>
						)}

						{selectedCity && (
							<div className='flex flex-wrap gap-2 mb-4'>
								{years.map((year) => (
									<button
										key={year}
										className={`px-4 py-2 rounded ${
											selectedYear === year
												? 'bg-blue-600'
												: 'bg-gray-600 hover:bg-gray-500'
										} text-white`}
										onClick={() =>
											setSelectedYear(selectedYear === year ? null : year)
										}
									>
										{year}
									</button>
								))}
							</div>
						)}

						{selectedYear && (
							<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
								{images.map((image) => (
									<div key={image} className='relative aspect-square'>
										<Image
											src={`https://nye-memories.s3.ap-southeast-2.amazonaws.com/memories/${image}`}
											alt={image}
											fill
											className='object-cover rounded'
											// @TODO: optimize these properties for faster loading
											// width={100}
											// height={100}
										/>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
