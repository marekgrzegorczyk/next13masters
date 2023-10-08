import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductListItemCoverImage } from "@/app/UI/atoms/ProductListItemCoverImage";
import { ProductListItemDesc } from "@/app/UI/atoms/ProductListItemDesc";
import { SuggestedProductsList } from "@/app/UI/organisms/SuggestedProductsList";

export const generateMetadata = async ({
	// dynamiczne generowanie metadanych
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Product ${product.title}`,
		description: product.description,
		openGraph: {
			title: `Product ${product.title}`,
			description: product.description,
			images: [
				{
					url: product.image,
					alt: product.title,
				},
			],
		},
	};
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<ProductListItemCoverImage
					image={{
						src: product.image,
						alt: product.title,
					}}
				/>
				<ProductListItemDesc
					product={{
						id: product.id,
						name: product.title,
						category: product.category,
						price: product.price,
						image: {
							src: product.image,
							alt: product.title,
						},
					}}
				/>
			</article>
			<aside>
				<Suspense fallback={"Ładowanie..."}>
					{/* można dodać spinner  */}
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
