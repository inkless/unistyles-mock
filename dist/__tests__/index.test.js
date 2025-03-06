"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
const stylesheet_1 = require("../stylesheet");
const styles = {
    button: {
        backgroundColor: 'red',
    },
    wrapper: (foo) => ({
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
const styles2 = (theme) => ({
    wrapper: {
        color: theme.colors,
    },
});
describe('unistyles-mock', () => {
    it('should render styles properly', () => {
        const stylesheet = (0, stylesheet_1.createStyles)(styles);
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
        const stylesheet = (0, stylesheet_1.createStyleSheetWithTheme)({ colors: 'bar' }).create(styles2);
        expect(stylesheet.wrapper).toMatchObject({
            color: 'bar',
        });
    });
});
//# sourceMappingURL=index.test.js.map