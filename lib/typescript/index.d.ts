export declare const ShareMenuReactView: {
    dismissExtension(error?: null): void;
    openApp(): void;
    continueInApp(extraData?: null): void;
    data(): any;
};
declare const _default: {
    /**
     * @deprecated Use `getInitialShare` instead. This is here for backwards compatibility.
     */
    getSharedText(callback: Function): void;
    getInitialShare(callback: Function): void;
    addNewShareListener(callback: (event: any) => void): import("react-native").EmitterSubscription;
};
export default _default;
//# sourceMappingURL=index.d.ts.map