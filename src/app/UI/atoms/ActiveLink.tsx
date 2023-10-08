"use client";

import { clsx } from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type ActiveLinkProps = {
	href: Route | URL;
	children: ReactNode;
};

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				"text-black",
				isActive && "underline ",
			)}
		>
			{children}
		</Link>
	);
};
