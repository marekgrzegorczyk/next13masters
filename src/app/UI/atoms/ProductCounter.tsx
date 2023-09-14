"use client";  // ustawia komponent jako client a nie server

import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex">
			<button onClick={() => setCounter((counter) => counter + 1)}>-</button>
			<button onClick={() => setCounter((counter) => counter - 1)}>+</button>
			<input readOnly value={counter} />
		</div>
	);
};
