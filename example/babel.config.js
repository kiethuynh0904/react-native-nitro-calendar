const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          // For development, we want to alias the library to the source
          '@kiethuynh/react-native-nitro-calendar': path.join(
            __dirname,
            '..',
            'src',
            'index.ts'
          ),
        },
      },
    ],
  ],
};

