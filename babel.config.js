module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          components: 'src/components',
          assets: 'assets'
        },
      },
    ],
  ],
}
