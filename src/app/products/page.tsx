import { getProductsList } from "@/api/products";
import { ProductList } from "../UI/organisms/ProductList";
import { type ProductListItemType } from "../UI/types";

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: ProductResponseItemRating;
	image: string;
	longDescription: string;
};

export type ProductResponseItemRating = {
	rate: number;
	count: number;
};

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-6xl sm:py-2 ">
			<ProductList products={products} />
		</section>
	);
}
