import Link from "next/link";
import { ProductCounter } from "../UI/atoms/ProductCounter";

export default async function Page() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-6xl sm:py-2 ">
			<p>test 1</p>
			<Link
				href="/test2"
				className="hover:underline"
				prefetch={true} // prefetch this page, default = true
				replace={true} // replace the current history state instead of adding a new one, default = false
			>
				{" "}
				Przejdz do test 2{" "}
			</Link>
			<ProductCounter />
		</section>
	);
}
