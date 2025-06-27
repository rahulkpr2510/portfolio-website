"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import { useMemo, useRef } from "react";

interface BlurFadeTextProps {
	text: string;
	className?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	duration?: number;
	characterDelay?: number;
	delay?: number;
	yOffset?: number;
	animateByCharacter?: boolean;
	blur?: string;
}

const BlurFadeText = ({
	text,
	className,
	variant,
	duration = 0.5,
	characterDelay = 0.06,
	delay = 0,
	yOffset = 10,
	animateByCharacter = false,
	blur = "10px",
}: BlurFadeTextProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
	const characters = useMemo(() => Array.from(text), [text]);

	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
		visible: { y: 0, opacity: 1, filter: "blur(0px)" },
	};

	if (animateByCharacter) {
		return (
			<div className="flex" ref={ref}>
				{characters.map((char, i) => (
					<motion.span
						key={i}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={variant || defaultVariants}
						transition={{
							delay: delay + i * characterDelay,
							duration,
							ease: "easeInOut",
						}}
						className={cn("inline-block", className)}
						style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
					>
						{char}
					</motion.span>
				))}
			</div>
		);
	}

	return (
		<motion.span
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={variant || defaultVariants}
			transition={{
				delay,
				duration,
				ease: "easeInOut",
			}}
			className={cn("inline-block", className)}
		>
			{text}
		</motion.span>
	);
};

export default BlurFadeText;
