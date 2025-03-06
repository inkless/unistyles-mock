/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  createStyles,
  createStyleSheetWithTheme,
  type StylesOrFn,
  type UniStyles,
} from '../stylesheet';

const styles: UniStyles = {
  button: {
    backgroundColor: 'red',
  },
  wrapper: (foo: string) => ({
    color: foo,
    variants: {
      bgColor: {
        primary: {
          backgroundColor: 'blue',
        },
        secondary: {
          backgroundColor: 'black',
        },
      },
    },
  }),
  something: {
    color: 'blue',
    variants: {
      bgColor: {
        primary: {
          backgroundColor: 'red',
        },
        secondary: {
          backgroundColor: 'green',
        },
      },
    },
  },
};

const styles2: StylesOrFn<{ colors: string }> = (theme) => ({
  wrapper: {
    color: theme.colors,
  },
});

describe('unistyles-mock', () => {
  it('should render styles properly', () => {
    const stylesheet = createStyles(styles);
    expect(stylesheet.something).toEqual({
      color: 'blue',
    });

    stylesheet.useVariants({
      bgColor: 'secondary',
    });

    expect(stylesheet.something).toMatchObject({
      backgroundColor: 'green',
    });
    // @ts-ignore
    expect(stylesheet.wrapper('foo')).toMatchObject({
      color: 'foo',
      backgroundColor: 'black',
    });

    stylesheet.useVariants({
      bgColor: 'primary',
    });

    expect(stylesheet.something).toMatchObject({
      backgroundColor: 'red',
    });
  });

  it('should render function styles properly', () => {
    const stylesheet = createStyleSheetWithTheme({ colors: 'bar' }).create(
      styles2,
    );

    expect(stylesheet.wrapper).toMatchObject({
      color: 'bar',
    });
  });
});
