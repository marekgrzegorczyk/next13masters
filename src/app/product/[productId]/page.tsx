import { getProductById } from "@/api/products";
import { ProductListItemCoverImage } from "@/app/UI/atoms/ProductListItemCoverImage";
import { ProductListItemDesc } from "@/app/UI/atoms/ProductListItemDesc";
import { SuggestedProductsList } from "@/app/UI/organisms/SuggestedProductsList";
import { Suspense } from "react";

export default async function ProductDetailsPage({
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
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
