"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyles = createStyles;
exports.createStyleSheetWithTheme = createStyleSheetWithTheme;
const miniruntime_1 = require("./miniruntime");
function extractNodeStyles(styles, selectedVariants) {
    if ("variants" in styles && styles.variants) {
        const { variants } = styles;
        // delete previous computed props
        if ("_uni_variant_props" in styles) {
            styles._uni_variant_props.forEach((prop) => {
                if (prop in styles) {
                    delete styles[prop];
                }
            });
        }
        const promotedStyles = Object.entries(selectedVariants).reduce((acc, [key, variant]) => {
            const selectedVariant = variants[key]?.[String(variant)];
            if (selectedVariant) {
                return {
                    ...acc,
                    ...selectedVariant,
                };
            }
            return acc;
        }, {});
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
function useVariants(styles, variants) {
    return createStyles(styles, variants);
}
function createStyles(styles, variants = {}) {
    Object.entries(styles).forEach(([key, value]) => {
        if (key === "useVariants") {
            return;
        }
        if (typeof value === "function") {
            styles[key] = (...args) => {
                return extractNodeStyles(value(...args), variants);
            };
            return;
        }
        styles[key] = extractNodeStyles(value, variants);
    });
    styles.useVariants = useVariants.bind(null, styles);
    return styles;
}
function createStyleSheetWithTheme(theme) {
    const create = (styles) => {
        if (typeof styles === "function") {
            return createStyles(styles(theme, miniruntime_1.miniRuntime));
        }
        return createStyles(styles);
    };
    const configure = jest.fn();
    return {
        create,
        configure,
    };
}
//# sourceMappingURL=stylesheet.js.map