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
  readonly themeName?: string; // eg. light or undefined if you haven't registered any themes
  readonly breakpoint?: string; // eg. sm or undefined if you haven't registered any breakpoints
  readonly hasAdaptiveThemes: boolean; //  true if you have enabled adaptive themes
  readonly colorScheme: 'light' | 'dark' | 'unspecified'; // eg. light or dark or unspecified
  readonly screen: Dimensions; // eg. {width: 1024, height: 768}
  readonly contentSizeCategory: string; // eg. Large
  readonly insets: Insets; // eg. { top: 28, bottom: 40, left: 0, right: 0 , ime: 0 }
  readonly pixelRatio: number; // eg. 3.0
  readonly fontScale: number; // eg. 1.5
  readonly rtl: boolean; // true if your user prefers RTL
  readonly statusBar: Dimensions; // eg. { width: 240, height: 20,  }
  readonly navigationBar: Dimensions; // eg. { width: 240, height: 44,  }
  readonly isPortrait: boolean; // true if your device is in portrait mode
  readonly isLandscape: boolean; // true if your device is in landscape mode
}

export const miniRuntime = {
  themeName: 'light',
  breakpoint: 'sm',
  hasAdaptiveThemes: true,
  colorScheme: 'light',
  screen: { width: 1024, height: 768 },
  contentSizeCategory: 'Large',
  insets: { top: 28, bottom: 40, left: 0, right: 0, ime: 0 },
  pixelRatio: 3.0,
  fontScale: 1.5,
  rtl: false,
  statusBar: { width: 240, height: 20 },
  navigationBar: { width: 240, height: 44 },
  isPortrait: true,
  isLandscape: false,
} as const satisfies MiniRuntime;
