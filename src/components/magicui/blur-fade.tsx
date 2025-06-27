"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
	children: React.ReactNode;
	className?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	duration?: number;
	delay?: number;
	yOffset?: number;
	inViewMargin?:
		| `${number}px`
		| `${number}% ${number}px ${number}% ${number}px`;
	blur?: string;
}

const BlurFade = ({
	children,
	className,
	variant,
	duration = 0.5,
	delay = 0,
	yOffset = 10,
	inViewMargin = "0% 0px -5% 0px",
	blur = "10px",
}: BlurFadeProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		margin: inViewMargin,
	});

	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
		visible: { y: 0, opacity: 1, filter: "blur(0px)" },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={variant || defaultVariants}
			transition={{
				delay,
				duration,
				ease: "easeInOut",
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default BlurFade;
