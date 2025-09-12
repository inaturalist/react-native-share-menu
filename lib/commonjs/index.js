"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ShareMenuReactView = void 0;
var _reactNative = require("react-native");
const {
  ShareMenu
} = _reactNative.NativeModules;
const EventEmitter = new _reactNative.NativeEventEmitter(ShareMenu);
const NEW_SHARE_EVENT_NAME = 'NewShareEvent';
const ShareMenuReactView = exports.ShareMenuReactView = {
  dismissExtension(error = null) {
    _reactNative.NativeModules.ShareMenuReactView.dismissExtension(error);
  },
  openApp() {
    _reactNative.NativeModules.ShareMenuReactView.openApp();
  },
  continueInApp(extraData = null) {
    _reactNative.NativeModules.ShareMenuReactView.continueInApp(extraData);
  },
  data() {
    return _reactNative.NativeModules.ShareMenuReactView.data();
  }
};
var _default = exports.default = {
  /**
   * @deprecated Use `getInitialShare` instead. This is here for backwards compatibility.
   */
  getSharedText(callback) {
    this.getInitialShare(callback);
  },
  getInitialShare(callback) {
    ShareMenu.getSharedText(callback);
  },
  addNewShareListener(callback) {
    const subscription = EventEmitter.addListener(NEW_SHARE_EVENT_NAME, callback);
    return subscription;
  }
};
//# sourceMappingURL=index.js.map