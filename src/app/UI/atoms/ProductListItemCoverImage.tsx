type CoverImageProps = {
	image: {
		src: string;
		alt: string;
	};
};

export const ProductListItemCoverImage = ({
	image: { src, alt },
}: CoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				className="h-full w-full object-cover object-center p-4 transition-transform"
				src={src}
				alt={alt}
				width={300}
				height={300}
			/>
		</div>
	);
};
