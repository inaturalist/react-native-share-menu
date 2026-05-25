import { NativeModules, NativeEventEmitter } from 'react-native';

const { ShareMenu } = NativeModules;

const EventEmitter = new NativeEventEmitter(ShareMenu);

const NEW_SHARE_EVENT_NAME = 'NewShareEvent';

export const ShareMenuReactView = {
  dismissExtension(error = null) {
    NativeModules.ShareMenuReactView.dismissExtension(error);
  },
  openApp() {
    NativeModules.ShareMenuReactView.openApp();
  },
  continueInApp(extraData = null) {
    NativeModules.ShareMenuReactView.continueInApp(extraData);
  },
  data() {
    return NativeModules.ShareMenuReactView.data();
  },
};

export default {
  /**
   * @deprecated Use `getInitialShare` instead. This is here for backwards compatibility.
   */
  getSharedText(callback: Function) {
    this.getInitialShare(callback);
  },
  getInitialShare(callback: Function) {
    ShareMenu.getSharedText(callback);
  },
  addNewShareListener(callback: (event: any) => void) {
    const subscription = EventEmitter.addListener(
      NEW_SHARE_EVENT_NAME,
      callback
    );

    return subscription;
  },
};
