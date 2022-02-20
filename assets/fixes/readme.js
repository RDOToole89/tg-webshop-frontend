// add this to index.js in node-modules react-native-web to avoid bug
// export const ViewPropTypes = { style: null };

// https://github.com/jsdf/react-native-htmlview/issues/313

// https://github.com/jsdf/react-native-htmlview/issues/313

//I ran into the same problem and wound up having to write a patch file using patch-package.

//  In node_modules/react-native-htmlview/HTMLView.js remove ViewPropTypes from the import statement.
//  Below the imports, add the following:

// const ViewPropTypes = typeof document !== 'undefined' || Platform.OS === 'web'
//  ? PropTypes.shape({style: PropTypes.object})
//  : require('react-native').ViewPropTypes || View.propTypes;
// Then run the following command: npx patch-package react-native-htmlview. This will generate a patch file locally in folder named "patches".
// Now, in your package.json file, add a postinstall command to your scripts like so:

//"scripts": {
//  "postinstall": "patch-package"
//}

//This was what I needed to do so I could get Storybook running under my Expo example app for the project I've been working on.
