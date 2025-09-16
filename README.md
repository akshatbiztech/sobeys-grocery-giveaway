# Grocery Giveaways

## 📱 App Demo

Watch the app demonstration video:

[![Grocery Giveaways Demo](https://img.shields.io/badge/📹-Watch%20Demo-blue?style=for-the-badge)](https://drive.google.com/file/d/1uWK0h-W48jguhOoeyLkzKb-4ib1z6oRZ/view?usp=drive_link)

A React Native mobile application built with Expo that provides users with grocery shopping rewards, challenges, and sweepstakes opportunities.

## 📱 Features

- **Overview**: Browse latest challenges and sweepstakes
- **Challenges**: Participate in various grocery-related challenges
- **Sweepstakes**: Enter sweepstakes for prizes
- **Dashboard**: Track your progress, chips balance, and rewards
- **Interactive UI**: Swipeable tabs and animated transitions

## 🛠️ Tech Stack

- **React Native** (0.81.4)
- **Expo** (~54.0.7)
- **TypeScript** (~5.9.2)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd GroceryGiveaways
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Run on specific platforms:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   ├── ChipTag.tsx
│   ├── CompletedChallengesCard.tsx
│   ├── EventCarousel.tsx
│   ├── EventSlide.tsx
│   ├── PrimaryButton.tsx
│   ├── SectionHeader.tsx
│   ├── StatCard.tsx
│   └── Tabs.tsx
├── screens/             # Main app screens
│   ├── ChallengesScreen.tsx
│   ├── DashboardScreen.tsx
│   ├── HomeScreen.tsx
│   ├── OverviewScreen.tsx
│   └── SweepstakesScreen.tsx
└── icons.ts            # Icon definitions
```

## 🔧 Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

### Building for Production

```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios
```

---

**Note**: This app is built with Expo and requires the Expo development environment to run properly.
