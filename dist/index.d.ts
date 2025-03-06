export declare function createUniStylesMock<Theme>(theme: Theme): {
    readonly StyleSheet: {
        create: (styles: import("./stylesheet").StylesOrFn<Theme>) => import("./stylesheet").UniStylesheet;
        configure: jest.Mock<any, any, any>;
    };
    readonly UnistylesRuntime: {
        readonly getTheme: () => Theme;
    };
    readonly useUnistyles: () => {
        theme: Theme;
    };
};
//# sourceMappingURL=index.d.ts.map