interface Dimensions {
    width: number;
    height: number;
}
interface Insets {
    top: number;
    bottom: number;
    left: number;
    right: number;
    ime: number;
}
export interface MiniRuntime {
    readonly themeName?: string;
    readonly breakpoint?: string;
    readonly hasAdaptiveThemes: boolean;
    readonly colorScheme: 'light' | 'dark' | 'unspecified';
    readonly screen: Dimensions;
    readonly contentSizeCategory: string;
    readonly insets: Insets;
    readonly pixelRatio: number;
    readonly fontScale: number;
    readonly rtl: boolean;
    readonly statusBar: Dimensions;
    readonly navigationBar: Dimensions;
    readonly isPortrait: boolean;
    readonly isLandscape: boolean;
}
export declare const miniRuntime: {
    readonly themeName: "light";
    readonly breakpoint: "sm";
    readonly hasAdaptiveThemes: true;
    readonly colorScheme: "light";
    readonly screen: {
        readonly width: 1024;
        readonly height: 768;
    };
    readonly contentSizeCategory: "Large";
    readonly insets: {
        readonly top: 28;
        readonly bottom: 40;
        readonly left: 0;
        readonly right: 0;
        readonly ime: 0;
    };
    readonly pixelRatio: 3;
    readonly fontScale: 1.5;
    readonly rtl: false;
    readonly statusBar: {
        readonly width: 240;
        readonly height: 20;
    };
    readonly navigationBar: {
        readonly width: 240;
        readonly height: 44;
    };
    readonly isPortrait: true;
    readonly isLandscape: false;
};
export {};
//# sourceMappingURL=miniruntime.d.ts.map