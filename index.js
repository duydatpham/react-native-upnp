
import { NativeModules, DeviceEventEmitter, Platform } from 'react-native';

const { RNUpnp, RNReactNativeUpnp } = NativeModules;

const UPNP = {}

UPNP.on = (callback) => {
    if (Platform.OS == 'ios')
        return DeviceEventEmitter.addListener('device-found', callback);
    else
        return DeviceEventEmitter.addListener('speaker-found', callback);
};

UPNP.search = () => {
    if (Platform.OS == 'ios')
        RNReactNativeUpnp.search();
    else
        RNUpnp.reloadSpeakers()
};


UPNP.loadSongs = () => {
    if (Platform.OS == 'android')
        RNUpnp.loadSongs();
};

UPNP.initUPNP = () => {
    if (Platform.OS == 'android')
        RNUpnp.initUPNP();
};

UPNP.setCurrentSpeakerIP = (ip) => {
    if (Platform.OS == 'android')
        RNUpnp.setCurrentSpeakerIP(ip);
};



export default UPNP;
