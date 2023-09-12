import Image from "next/image";

type CoverImageProps = {
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};

export const ProductListItemCoverImage = ({
	image: { src, alt, width, height },
}: CoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				className="h-full w-full object-cover object-center p-4 transition-transform"
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
};
