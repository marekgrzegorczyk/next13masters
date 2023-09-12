import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemType } from "../types";

export const ProductList = ({
	products,
}: {
	products: ProductListItemType[];
}) => {
	return (
		<ul
			className="grid grid-cols-2 gap-8 sm:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return (
					<ProductListItem
						key={product.id}
						id={product.id}
						name={product.name}
						category={product.category}
						price={product.price}
						image={{
							src: product.image.src,
							alt: product.image.alt,
							width: product.image.width,
							height: product.image.height,
						}}
					/>
				);
			})}
		</ul>
	);
};
