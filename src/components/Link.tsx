import { cva, VariantProps } from "class-variance-authority";
import { createElement, FC, HTMLProps, ReactNode } from "react";
import { STRING_TO_ICON } from "./icons";

interface LinkProps extends VariantProps<typeof linkClasses> {
  children?: ReactNode;
  icon?:
    | "chevron-down"
    | "chart-bar"
    | "microphone"
    | "rectangle-stack"
    | "play";
}

const linkClasses = cva(
  "group cursor-pointer transition-all duration-200 inline-flex items-center gap-1",
  {
    variants: {
      type: {
        primary:
          "text-primary hover:text-primary-400 dark:hover:text-primary-600",
        secondary:
          "text-dark dark:text-light hover:text-primary dark:hover:text-primary",
        tertiary:
          "text-neutral-400 font-medium dark:text-neutral-600 hover:text-primary dark:hover:text-primary",
      },
      textSize: {
        xs: "",
        sm: "text-xs",
        md: "text-sm",
      },
    },
    defaultVariants: {
      type: "primary",
      textSize: "md",
    },
  }
);

const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children,
  type,
  textSize,
  icon,
  onClick,
  href,
}) => {
  return (
    <a
      className={linkClasses({ type, textSize })}
      onClick={onClick}
      href={href}
    >
      {icon && icon !== "chevron-down"
        ? createElement(STRING_TO_ICON[icon], {
            className: "h-[1em] w-[1em] mr-2",
          })
        : null}

      {children}

      {icon && icon === "chevron-down"
        ? createElement(STRING_TO_ICON[icon], {
            className: "h-[1em] w-[1em]",
          })
        : null}
    </a>
  );
};

export default Link;
