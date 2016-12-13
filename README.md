# Getting Started with React Native

- Downloaded the react-native 0.38.0 version with ```react-native init AwesomeProject --version 0.38.0```
- To run, open AwesomeProject.xcodeproj in XCode and run ios simulator to render app. Had to comment out line 26-27 in React > Base > RCTPlatform.c > interfaceIdiom(), since there was a build fail for the UIUserInterfaceIdiomCarPlay.
- Had to clear cache with ```npm start -- --reset-cache``` in order to get the ios simulator to be error-free.

# Basic Syntax
- Components can be made with certain parameters called ```props```. Which can allow one single component to be used in different places.
- If using props with their own class, the inline-styling won't work if the prop is inside the component.
- May add inline-styling if rendering within own component refer to ```class Blinks extends Component```.

# Small Fixes
- Will need to restart the simulator when adding a new image to a local directory in the project.

# For later development
- Can use Redux for later on setting state instead of calling ```setState```.
