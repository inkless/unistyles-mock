import { createStyleSheetWithTheme } from './stylesheet';

export function createUniStylesMock<Theme>(theme: Theme) {
  return {
    StyleSheet: createStyleSheetWithTheme(theme),
    UnistylesRuntime: {
      getTheme: () => theme,
    },
    useUnistyles: () => {
      return {
        theme,
      };
    },
  } as const;
}
