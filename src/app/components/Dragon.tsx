import React from 'react';
import Image from 'next/image'
import { CustomProps } from '../pages/models/props.model';

/**
 * Component to see the image, name and description of a space X Dragon
 *
 * @param dragon information about the Space X Dragon 
 * @returns Card to visualize the information.
 */
export const Dragon = ({ dragon } : CustomProps) => {
	return (
		<article className="flex flex-col p-4  bg-slate-200 dark:bg-zinc-800 hover:scale-110 shadow-sm hover:shadow-lg hover:bg-slate-300 transition duration-300 ease-out text-white ">
			{/* image */}
			{dragon?.flickr_images[0] && (
				<div>
					<Image
						src={dragon?.flickr_images[0]}
						alt={dragon?.flickr_images[0]}
						className="h-56 w-full object-contain rounded-t-lg shadow-md"
					/>
				</div>
			)}

			<h1 className="font-bold text-xl my-2">{dragon?.name}</h1>
			<p className="text-xs my-2 line-clamp-3">{dragon?.description}</p>
		</article>
	);
};
