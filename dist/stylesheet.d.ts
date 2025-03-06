import type { MiniRuntime } from "./miniruntime";
export type Variants = Record<string, string | boolean | undefined>;
export type NodeStyle = Record<string, any>;
export type NodeStyles = NodeStyle & {
    variants?: Record<string, Record<string, NodeStyle>>;
};
export type UniStyles = Record<string, NodeStyles | ((arg?: any) => NodeStyles)>;
export type StylesOrFn<Theme> = UniStyles | ((theme: Theme, rt: MiniRuntime) => UniStyles);
export type UniStylesheet = UniStyles & {
    useVariants: (variants: Variants) => UniStylesheet;
};
export declare function createStyles(styles: UniStyles, variants?: Variants): UniStylesheet;
export declare function createStyleSheetWithTheme<Theme>(theme: Theme): {
    create: (styles: StylesOrFn<Theme>) => UniStylesheet;
    configure: jest.Mock<any, any, any>;
};
//# sourceMappingURL=stylesheet.d.ts.map