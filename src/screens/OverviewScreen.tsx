import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { EventCarousel } from "../components/EventCarousel";
import { EventSlideItem } from "../components/EventSlide";
import {
  coinsIcon,
  voilaIcon,
  challengeImage1,
  challengeImage2,
  sweepstakesImage1,
} from "../icons";

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

const OUTER_HPAD = 16; // ScrollView horizontal padding

interface OverviewScreenProps {
  slideWidth: number;
  gap: number;
  bannerHeight: number;
  slidePaddingVertical: number;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  slideWidth,
  gap,
  bannerHeight,
  slidePaddingVertical,
}) => {
  const challengeSlides: EventSlideItem[] = [
    {
      id: "c1",
      title: "Open the mobile app weekly",
      subtitle:
        "Open the app at least once per week until April 30th, 2025, to earn 2 chips each time.",
      image: challengeImage1,
      leftTag: { text: "5", icon: coinsIcon },
      middleTag: {
        icon: voilaIcon,
        text: "",
      },
      rightTag: { text: "Free Product Offer" },
      cta: "Start Challenge",
    },
    {
      id: "c2",
      title: "Scan receipt in-store",
      subtitle:
        "Upload your Sobeys receipt to earn bonus chips within 24 hours of purchase.",
      image: challengeImage2,
      leftTag: { text: "10", icon: coinsIcon },
      middleTag: { icon: voilaIcon, text: "" },
      rightTag: { text: "Bonus Chips" },
      cta: "Scan Now",
    },
    {
      id: "c3",
      title: "Answer weekly trivia",
      subtitle:
        "Test your knowledge and earn chips by completing the weekly grocery quiz.",
      image: challengeImage2,
      leftTag: { text: "3", icon: coinsIcon },
      middleTag: { icon: voilaIcon, text: "" },
      rightTag: { text: "Quick Win" },
      cta: "Play Trivia",
    },
  ];

  const sweepstakesSlides: EventSlideItem[] = [
    {
      id: "s1",
      title: "Sweepstake Title #1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: sweepstakesImage1,
      cta: "Enter Sweepstakes",
    },
    {
      id: "s2",
      title: "Sweepstake Title #2",
      body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sweepstakesImage1,
      cta: "Enter Sweepstakes",
    },
    {
      id: "s3",
      title: "Sweepstake Title #3",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: sweepstakesImage1,
      cta: "Enter Sweepstakes",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Latest Challenges */}
      <SectionHeader
        title="Latest Challenges"
        actionLabel="View all"
        onPressAction={() => {}}
      />
      <Text style={styles.sectionDescription}>
        Complete weekly challenges, answer trivia, and check back for more
        chances to win.
      </Text>

      {/* Carousel: each slide is its own card (no shared white background) */}
      <EventCarousel
        items={challengeSlides}
        onPressCTA={(item) => {
          console.log("Challenge CTA pressed:", item.title);
        }}
        slideWidth={slideWidth}
        gap={gap}
        bannerHeight={bannerHeight}
        slidePaddingVertical={slidePaddingVertical}
      />

      {/* Sweepstakes */}
      <SectionHeader
        title="Sweepstakes"
        actionLabel="View all"
        onPressAction={() => {}}
      />
      <Text style={styles.sectionDescription}>
        Carousel body text lorem ipsum ementum consectetur nulla dignissim.
      </Text>
      <EventCarousel
        items={sweepstakesSlides}
        onPressCTA={(item) => {
          console.log("Sweepstakes CTA pressed:", item.title);
        }}
        slideWidth={slideWidth}
        gap={gap}
        bannerHeight={bannerHeight}
        slidePaddingVertical={slidePaddingVertical}
      />

      <View style={{ height: 24 }} />
    </ScrollView>
  );
};

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: OUTER_HPAD,
    paddingBottom: 12,
    backgroundColor: COLORS.bg,
  },

  sectionDescription: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 12,
    lineHeight: 20,
    paddingHorizontal: 12,
  },
});
