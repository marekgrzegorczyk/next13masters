import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDesc } from "../atoms/ProductListItemDesc";
import { type ProductListItemType } from "../types";

export const ProductListItem = (product: ProductListItemType) => {
	return (
		<li>
			<article>
				<ProductListItemCoverImage image={product.image} />
				<ProductListItemDesc product={product} />
			</article>
		</li>
	);
};
