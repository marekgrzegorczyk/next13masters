"use client"; // ustawia komponent jako client a nie server

import {
	useParams,
	useSearchParams,
	usePathname,
	useSelectedLayoutSegment,
	useSelectedLayoutSegments,
} from "next/navigation";
import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	// const router = useRouter(); // dopuszczalne tylko w klienckich komponentach

	// useEffect(() => {
	// 	if (isLoggedIn) {
	// 		router.replace("/dashboard");
	// 	}
	// }, [router]);

	useParams(); // dopuszczalne tylko w klienckich komponentach
	useSearchParams(); // dopuszczalne tylko w klienckich komponentach
	usePathname().split("/"); // dopuszczalne tylko w klienckich komponentach
	useSelectedLayoutSegment(); // dopuszczalne tylko w klienckich komponentach
	useSelectedLayoutSegments(); // dopuszczalne tylko w klienckich komponentach

	return (
		<div className="flex">
			<button onClick={() => setCounter((counter) => counter + 1)}>-</button>
			<button onClick={() => setCounter((counter) => counter - 1)}>+</button>
			<input readOnly value={counter} />
		</div>
	);
};
