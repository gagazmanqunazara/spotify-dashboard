import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { createElement, FC, HTMLProps, ReactNode } from "react";
import { STRING_TO_ICON } from "./icons";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children?: ReactNode;
  icon?: "spotify" | "github";
  className?: string;
}

const buttonClasses = cva(
  "inline-flex gap-3 items-center justify-center font-medium transition-all duration-200",
  {
    variants: {
      type: {
        primary:
          "bg-primary hover:bg-primary-400 dark:hover:bg-primary-600 text-light dark:text-dark",
        secondary:
          "text-neutral-400 dark:text-neutral-600 hover:text-dark dark:hover:text-light",
      },
      rounded: {
        full: "rounded-full",
      },
      size: {
        sm: "px-4 py-1 text-xs",
        normal: "px-5 py-2 text-xs",
        lg: "px-6 py-3 text-sm",
      },
    },
    defaultVariants: {
      type: "primary",
      size: "normal",
      rounded: "full",
    },
  }
);

const Button: FC<ButtonProps & HTMLProps<HTMLButtonElement>> = ({
  children,
  type,
  size,
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(buttonClasses({ type, size }), className)}
      onClick={onClick}
    >
      {icon ? createElement(STRING_TO_ICON[icon]) : null}
      {children}
    </button>
  );
};

export default Button;
