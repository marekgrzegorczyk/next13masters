"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type ActiveLinkProps = {
	href: string;
	children: ReactNode;
};

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				"text-blue-400 hover:text-blue-600",
				isActive && "underline ",
			)}
		>
			{children}
		</Link>
	);
};
