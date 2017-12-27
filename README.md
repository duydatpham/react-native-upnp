
# react-native-react-native-upnp

## Getting started

`$ npm install react-native-react-native-upnp --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-upnp`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-upnp` and add `RNReactNativeUpnp.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeUpnp.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeUpnpPackage;` to the imports at the top of the file
  - Add `new RNReactNativeUpnpPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-upnp'
  	project(':react-native-react-native-upnp').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-upnp/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-upnp')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativeUpnp.sln` in `node_modules/react-native-react-native-upnp/windows/RNReactNativeUpnp.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNReactNativeUpnp;` to the usings at the top of the file
  - Add `new RNReactNativeUpnpPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNReactNativeUpnp from 'react-native-react-native-upnp';

// TODO: What do with the module?
RNReactNativeUpnp;
```
  