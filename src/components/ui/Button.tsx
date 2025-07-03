import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition duration-300";
  const variantStyle =
    variant === "primary"
      ? "bg-white text-black hover:bg-gray-300"
      : "bg-black text-white border border-white hover:bg-white hover:text-black";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      style={{
        backgroundColor: "#FF217D",
        borderRadius: "2rem",
        borderWidth: 1,
        color: "white",
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
