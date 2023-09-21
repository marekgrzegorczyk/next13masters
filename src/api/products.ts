import { type ProductResponseItem } from "@/app/products/page";
import { type ProductListItemType } from "@/app/UI/types";

const productResponseItemToProductListItemType = (
	product: ProductResponseItem,
): ProductListItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		image: {
			alt: product.title,
			src: product.image,
		},
	};
};

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		productResponseItemToProductListItemType,
	);
	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponse;
};
