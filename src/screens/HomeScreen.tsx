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
const OUTER_HPAD = 16; // ScrollView horizontal padding
const GAP = 14; // gap between slides
const PEEK = 28; // visible part of next slide

// Width available across the content (no outer card now)
const INNER_W = SCREEN_W - OUTER_HPAD * 2;
// Start from inner width minus a peek, then reduce by 5% to ensure a break
const SLIDE_W = Math.round((INNER_W - PEEK) * 0.95);

// Heights (increased ~10%)
const BANNER_H = 190; // was 140
const SLIDE_PAD_V = 16; // was 12

export const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleTabChange = (tab: TabKey) => {
    // Fade out current content
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      // Change tab and fade in new content
      setActiveTab(tab);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  };

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
        {/* Stats Row */}
        <View style={styles.statsRow}>
          <StatCard
            icon={
              <Image
                source={coinsIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            }
            label="Chips    Balance"
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
            label="My       Rewards"
            value=""
          />
        </View>

        {/* Tabs */}
        <Tabs
          active={activeTab}
          onChange={handleTabChange}
          items={["Overview", "Challenges", "Sweepstakes", "Dashboard"]}
        />

        {/* Tab Content with Animation */}
        <Animated.View style={{ opacity: fadeAnim }}>
          {renderTabContent()}
        </Animated.View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

/* ---------- Styles ---------- */

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

  /* stats */
  statsRow: { flexDirection: "row", gap: 12, marginTop: 8, marginBottom: 12 },
});
