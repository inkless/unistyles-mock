/* eslint-disable @typescript-eslint/no-explicit-any */

import type { MiniRuntime } from "./miniruntime";

import { miniRuntime } from "./miniruntime";

export type Variants = Record<string, string | boolean | undefined>;

export type NodeStyle = Record<string, any>;

export type NodeStyles = NodeStyle & {
  variants?: Record<string, Record<string, NodeStyle>>;
};

export type UniStyles = Record<
  string,
  NodeStyles | ((arg?: any) => NodeStyles)
>;

export type StylesOrFn<Theme> =
  | UniStyles
  | ((theme: Theme, rt: MiniRuntime) => UniStyles);

export type UniStylesheet = UniStyles & {
  useVariants: (variants: Variants) => UniStylesheet;
};

function extractNodeStyles(styles: NodeStyles, selectedVariants: Variants) {
  if ("variants" in styles && styles.variants) {
    const { variants } = styles;

    // delete previous computed props
    if ("_uni_variant_props" in styles) {
      (styles._uni_variant_props as string[]).forEach((prop) => {
        if (prop in styles) {
          delete (styles as Record<string, unknown>)[prop];
        }
      });
    }

    const promotedStyles = Object.entries(selectedVariants).reduce(
      (acc, [key, variant]) => {
        const selectedVariant = variants[key]?.[String(variant)];
        if (selectedVariant) {
          return {
            ...acc,
            ...selectedVariant,
          };
        }
        return acc;
      },
      {}
    );
    Object.assign(styles, promotedStyles);
    Object.defineProperties(styles, {
      _uni_variants: {
        value: selectedVariants,
        writable: true,
        enumerable: false,
      },
      _uni_variant_props: {
        value: Object.keys(promotedStyles),
        writable: true,
        enumerable: false,
      },
      variants: {
        value: variants,
        writable: true,
        enumerable: false,
      },
    });

    return styles;
  }

  return styles;
}

function useVariants(styles: UniStyles, variants: Variants) {
  return createStyles(styles, variants);
}

export function createStyles(
  styles: UniStyles,
  variants: Variants = {}
): UniStylesheet {
  Object.entries(styles).forEach(([key, value]) => {
    if (key === "useVariants") {
      return;
    }

    if (typeof value === "function") {
      styles[key] = (...args: any[]) => {
        return extractNodeStyles(value(...args), variants);
      };
      return;
    }

    styles[key] = extractNodeStyles(value, variants);
  });

  (styles as UniStylesheet).useVariants = useVariants.bind(null, styles);
  return styles as UniStylesheet;
}

export function createStyleSheetWithTheme<Theme>(theme: Theme) {
  const create = (styles: StylesOrFn<Theme>) => {
    if (typeof styles === "function") {
      return createStyles(styles(theme, miniRuntime));
    }

    return createStyles(styles);
  };

  const configure = jest.fn();

  return {
    create,
    configure,
  };
}
