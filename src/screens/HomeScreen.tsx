import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { StatCard } from "../components/StatCard";
import { Tabs } from "../components/Tabs";
import { OverviewScreen } from "./OverviewScreen";
import { ChallengesScreen } from "./ChallengesScreen";
import { SweepstakesScreen } from "./SweepstakesScreen";
import { DashboardScreen } from "./DashboardScreen";
import { coinsIcon, circleCheckIcon, giftIcon } from "../icons";

const COLORS = {
  primary: "#0D3A2C",
  primaryText: "#0D3A2C",
  bg: "#F4F6F5",
  card: "#FFFFFF",
  text: "#111827",
  subtext: "#6B7280",
  border: "#E5E7EB",
  link: "#0D3A2C",
};

type TabKey = "Overview" | "Challenges" | "Sweepstakes" | "Dashboard";

const SCREEN_W = Dimensions.get("window").width;
const OUTER_HPAD = 16;
const GAP = 14;
const PEEK = 28;

const INNER_W = SCREEN_W - OUTER_HPAD * 2;
const SLIDE_W = Math.round((INNER_W - PEEK) * 0.87);

const BANNER_H = 190;
const SLIDE_PAD_V = 16;

export const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const tabs: TabKey[] = ["Overview", "Challenges", "Sweepstakes", "Dashboard"];

  const handleTabChange = (tab: TabKey) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setActiveTab(tab);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return (
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
        Math.abs(gestureState.dx) > 10
      );
    },
    onPanResponderRelease: (evt, gestureState) => {
      const swipeThreshold = 50;
      const { dx } = gestureState;

      if (Math.abs(dx) > swipeThreshold) {
        const currentIndex = tabs.indexOf(activeTab);

        if (dx > 0 && currentIndex > 0) {
          handleTabChange(tabs[currentIndex - 1]);
        } else if (dx < 0 && currentIndex < tabs.length - 1) {
          handleTabChange(tabs[currentIndex + 1]);
        }
      }
    },
  });

  const renderTabContent = () => {
    const commonProps = {
      slideWidth: SLIDE_W,
      gap: GAP,
      bannerHeight: BANNER_H,
      slidePaddingVertical: SLIDE_PAD_V,
    };

    switch (activeTab) {
      case "Overview":
        return <OverviewScreen {...commonProps} />;
      case "Challenges":
        return <ChallengesScreen {...commonProps} />;
      case "Sweepstakes":
        return <SweepstakesScreen {...commonProps} />;
      case "Dashboard":
        return <DashboardScreen {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" backgroundColor="#0D3A2C" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Grocery Giveaways</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.statsRow}>
          <StatCard
            icon={
              <Image
                source={coinsIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            }
            label="Chips            Balance"
            value="1,000"
          />
          <StatCard
            icon={
              <Image
                source={circleCheckIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            }
            label="Challenges Completed"
            value="10"
          />
          <StatCard
            icon={
              <Image
                source={giftIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            }
            label="My              Rewards"
            value=""
          />
        </View>

        <Tabs
          active={activeTab}
          onChange={handleTabChange}
          items={["Overview", "Challenges", "Sweepstakes", "Dashboard"]}
        />

        <Animated.View
          style={{ opacity: fadeAnim }}
          {...panResponder.panHandlers}
        >
          {renderTabContent()}
        </Animated.View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.primary },
  header: {
    paddingHorizontal: OUTER_HPAD,
    paddingTop: 6,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#FFFFFF" },
  scrollContent: {
    paddingHorizontal: OUTER_HPAD,
    paddingBottom: 12,
    backgroundColor: COLORS.bg,
  },

  statsRow: { flexDirection: "row", gap: 12, marginTop: 8, marginBottom: 12 },
});
