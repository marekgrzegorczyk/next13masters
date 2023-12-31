import { ProductList } from "../UI/organisms/ProductList";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/products";

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
	const { products } = await executeGraphql(ProductsGetListDocument);

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-6xl sm:py-2 ">
			<ProductList products={products} />
		</section>
	);
}
