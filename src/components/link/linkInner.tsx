import { ReactNode } from "react";

import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

// TODO: add hover color
const variants = {
  primary: {
    color: "black.primary",
    fontSize: 4,
    _hover: { bg: "green.light" },
  },
  secondary: {
    color: "white.primary",
    fontSize: 4,
    _hover: { bg: "green.light" },
  },
  box: {
    color: "black.primary",
    borderColor: "yellow.primary",
    backgroundColor: "yellow.primary",
    fontStyle: "italic",
    fontWeight: "bold",
    px: 1,
    fontSize: 6,
    _hover: { bg: "green.light" },
  },
};
export type LinkProps = {
  children: ReactNode;
  nextLink?: typeof NextLink;
  variant: keyof typeof variants;
};

export const LinkInner = ({ nextLink, children, variant }: LinkProps) => {
  return (
    <ChakraLink as={nextLink} {...variants[variant]}>
      {children}
    </ChakraLink>
  );
};
