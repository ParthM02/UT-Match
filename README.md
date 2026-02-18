# utmatch

A React Native app built with [Expo SDK 54](https://expo.dev) and React Native 0.81.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22.11.0
- [Expo Go](https://expo.dev/go) installed on your phone (for device preview)

## Getting Started

Install dependencies:

```sh
npm install
```

Start the Expo dev server:

```sh
npx expo start
```

### Preview Options

- **Web** (fastest iteration): `npx expo start --web`
- **Phone**: Scan the QR code once with Expo Go — Fast Refresh handles the rest
- **Android Emulator**: Press `a` in the Expo terminal (requires Android Studio AVD)

### Clearing Cache

If you run into stale bundle issues:

```sh
npx expo start --clear
```

## Project Structure

- `App.tsx` — Root component
- `app.json` — Expo and app configuration
- `metro.config.js` — Metro bundler config (uses Expo defaults)
- `babel.config.js` — Babel config (uses `babel-preset-expo`)
- `android/` — Native Android project
- `ios/` — Native iOS project

## Native Builds

For running on native without Expo Go:

```sh
# Android
npm run android

# iOS (requires CocoaPods)
bundle install
bundle exec pod install
npm run ios
```
