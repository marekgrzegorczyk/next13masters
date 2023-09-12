import { ProductList } from "../UI/organisms/ProductList";
import { ProductListItemType } from "../UI/types";

const products: ProductListItemType[] = [
	{
		id: "1",
		name: "kubeq",
		category: "kubki",
		price: 123,
		image: {
			alt: "alt",
			src: "/2-1.jpg",
			width: 300,
			height: 300,
		},
	},
	{
		id: "2",
		name: "też kubeq",
		category: "kubeki",
		price: 321,
		image: {
			alt: "alt",
			src: "/2-1.jpg",
			width: 300,
			height: 300,
		},
	},
	{
		id: "3",
		name: "też kubeqggggg",
		category: "kubeki",
		price: 4444,
		image: {
			alt: "alt",
			src: "/2-1.jpg",
			width: 300,
			height: 300,
		},
	},

	{
		id: "4",
		name: "też kubeqqqqq",
		category: "kubeki",
		price: 1234,
		image: {
			alt: "alt",
			src: "/2-1.jpg",
			width: 300,
			height: 300,
		},
	},
];

export default function Products() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-6xl sm:py-2 ">
			<ProductList products={products} />
		</section>
	);
}
