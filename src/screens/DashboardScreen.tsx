import React from "react";
import { Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { VoilaCard, StatsCard } from "../components/dashboard";
import { CouponCardItem } from "../components/dashboard/CouponCard";
import { freeImage, sceneImage } from "../icons";

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

const OUTER_HPAD = 16;
const SCREEN_WIDTH = Dimensions.get("window").width;
const COUPON_CARD_WIDTH = SCREEN_WIDTH * 0.65;
const COUPON_GAP = 12;

interface DashboardScreenProps {
  slideWidth: number;
  gap: number;
  bannerHeight: number;
  slidePaddingVertical: number;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  slideWidth,
  gap,
  bannerHeight,
  slidePaddingVertical,
}) => {
  const couponItems: CouponCardItem[] = [
    {
      id: "c1",
      validUntil: "Sep 30, 2025",
      status: "Active",
      couponCode: "FREESHIP2025",
      earnedFrom: "Open the App Challenge",
    },
    {
      id: "c2",
      validUntil: "Oct 15, 2025",
      status: "Active",
      couponCode: "VOILA50OFF",
      earnedFrom: "Weekly Trivia Challenge",
    },
    {
      id: "c3",
      validUntil: "Nov 1, 2025",
      status: "Active",
      couponCode: "DELIVERYFREE",
      earnedFrom: "Scan Receipt Challenge",
    },
  ];

  const handleCopyCode = (code: string) => {
    console.log("Copied code:", code);
  };

  const handleFreeProductsPress = () => {
    console.log("Free Products button pressed");
  };

  const handleScenePointsPress = () => {
    console.log("Scene+ Points button pressed");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <Text style={styles.dashboardSubtitle}>
        See how you stack up. Refresh to see the most up to the minute rankings.
      </Text>

      <Text style={styles.myRewardsTitle}>My Rewards</Text>

      <VoilaCard
        items={couponItems}
        onCopyCode={handleCopyCode}
        slideWidth={COUPON_CARD_WIDTH}
        gap={COUPON_GAP}
      />

      <StatsCard
        headerImage={freeImage}
        title="Free Products"
        description="Redeem your free product rewards"
        statsLabel="You have earned"
        statsValue="2 Free Products"
        buttonText="View All"
        onButtonPress={handleFreeProductsPress}
      />

      <StatsCard
        headerImage={sceneImage}
        title="Scene+ Points"
        description="Manage your Scene+ points and rewards"
        statsLabel="You have earned"
        statsValue="2,500 Points"
        buttonText="View All"
        onButtonPress={handleScenePointsPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: OUTER_HPAD,
    marginTop: 16,
    paddingBottom: 12,
    backgroundColor: COLORS.bg,
  },

  dashboardTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 8,
  },

  dashboardSubtitle: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 32,
    lineHeight: 22,
  },

  myRewardsTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 16,
  },
});
