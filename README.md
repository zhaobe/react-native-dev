# Getting Started with React Native

- Downloaded the react-native 0.38.0 version with ```react-native init AwesomeProject --version 0.38.0```.
- Can either run from launching XCode or with ```react-native run-ios``` command.
- To run, open AwesomeProject.xcodeproj in XCode and run ios simulator to render app. Had to comment out line 26-27 in React > Base > RCTPlatform.c > interfaceIdiom(), since there was a build fail for the UIUserInterfaceIdiomCarPlay.
- Had to clear cache with ```npm start -- --reset-cache``` in order to get the ios simulator to be error-free.

## Basic Syntax
- Components can be made with certain parameters called ```props```. Which can allow one single component to be used in different places.
- If using props with their own class, the inline-styling won't work if the prop is inside the component. But if the styling is in the component itself then it passes to main view component (e.g. in the Greetings component).
- May add inline-styling if rendering within own component refer to ```class Blinks extends Component```.

## Small Fixes
- Will need to restart the simulator when adding a new image to a local directory in the project.

## For later development
- Can use Redux for later on setting state instead of calling ```setState```.

## Links for reference
- [For troubleshooting](https://facebook.github.io/react-native/docs/troubleshooting.html)
- [ES6 setState mounting error](http://jaketrent.com/post/set-state-in-callbacks-in-react/)

## Issues
- Need to find a fix for ```setState```, mounting or unmount ```Blinks``` component
