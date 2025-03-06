"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUniStylesMock = createUniStylesMock;
const stylesheet_1 = require("./stylesheet");
function createUniStylesMock(theme) {
    return {
        StyleSheet: (0, stylesheet_1.createStyleSheetWithTheme)(theme),
        UnistylesRuntime: {
            getTheme: () => theme,
        },
        useUnistyles: () => {
            return {
                theme,
            };
        },
    };
}
//# sourceMappingURL=index.js.map