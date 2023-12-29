'use client';
import React, { FormEvent, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_DRAGONS } from '../pages/services/dragons.service';
import { iDragon } from '../pages/models/iDragon.model';
import { Dragon } from './Dragon';

/**
 * Handles the dragon request from the Dragons graph and handles the errors
 * @returns 
 */
export const Dragons = () => {
	// We need to have the state of the image and name so we can save it
	// once it detects the changes and reset the values once the request
	// is submitted to the mutation
    const [name, setName] = useState('');
	const [image, setImage] = useState('');
    const { data, loading, error} = useQuery(GET_DRAGONS);

    const dragons: iDragon[] = data?.getDragons;
    // const [addDragon] = useMutation(ADD_DRAGON, {
	// 	variables: { image, name },
	// 	refetchQueries: [{ query: GET_DRAGONS }],
	// });

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		// Prevents the page from reloading when a change it's detected.
		e.preventDefault();
		if (!!image || !!name) {
            return alert("Fill all the fields");
        }

		//addDragon({ variables: { image, title } });
		setName('');
		setImage('');
	};

	//TODO: move the error handling to a different component so it can be
	// reused by others.

	// Displays messages depending on the query status
	if (loading) {
        return (
			<p className="text-white flex items-center justify-center">
				Loading
			</p>
		);
    }

	if (error) {
        return (
			<p className="text-white flex items-center justify-center">
				Error please try again later
			</p>
		);
    }

	return (
		<div className="mt-5">
			<form onSubmit={handleSubmit} className="flex my-5 space-x-3">
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Type Dragon's name"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={image}
					onChange={(e) => setImage(e.target.value)}
					type="text"
					placeholder="Image URL"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<button className="bg-yellow-500 p-2 rounded-lg ">
					Add Dragon
				</button>
			</form>
			<div className="grid grid-cols-4 gap-2">
				{
					dragons.map((dragon: iDragon) => (
						<Dragon key={dragon.id} dragon={dragon} />
					))
				}
			</div>
		</div>
	);
}
