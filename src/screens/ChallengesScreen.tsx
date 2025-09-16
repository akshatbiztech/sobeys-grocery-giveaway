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
import { CompletedChallengesCard } from "../components/CompletedChallengesCard";
import {
  coinsIcon,
  voilaIcon,
  weeklyChallengeImage1,
  weeklyChallengeImage2,
  weeklyChallengeImage3,
  triviaChallengeImage1,
  triviaChallengeImage2,
  triviaChallengeImage3,
  triviaChallengeImage4,
  upcomingChallengeImage1,
  upcomingChallengeImage2,
  upcomingChallengeImage3,
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

interface ChallengesScreenProps {
  slideWidth: number;
  gap: number;
  bannerHeight: number;
  slidePaddingVertical: number;
}

export const ChallengesScreen: React.FC<ChallengesScreenProps> = ({
  slideWidth,
  gap,
  bannerHeight,
  slidePaddingVertical,
}) => {
  const challengeSlides: EventSlideItem[] = [
    {
      id: "c1",
      title: "Redeem Any Offer In Store",
      subtitle:
        "Earn 5 chips for redeeming any personalized or digital offer in store. It doesn't get any better than that.",
      image: weeklyChallengeImage1,
      leftTag: { text: "5", icon: coinsIcon },
      rightTag: { text: "Free Product Offer" },
      cta: "Start Challenge",
    },
    {
      id: "c2",
      title: "Scan receipt in-store",
      subtitle:
        "Upload your Sobeys receipt to earn bonus chips within 24 hours of purchase.",
      image: weeklyChallengeImage2,
      leftTag: { text: "10", icon: coinsIcon },
      rightTag: { text: "Bonus Chips" },
      cta: "Scan Now",
    },
    {
      id: "c3",
      title: "Answer weekly trivia",
      subtitle:
        "Test your knowledge and earn chips by completing the weekly grocery quiz.",
      image: weeklyChallengeImage3,
      leftTag: { text: "3", icon: coinsIcon },
      rightTag: { text: "Quick Win" },
      cta: "Play Trivia",
    },
  ];

  const triviaChallengeSlides: EventSlideItem[] = [
    {
      id: "t1",
      title: "Lorem Contest Title",
      subtitle: "Get up to 10 chips when you complete the trivia set.",
      image: triviaChallengeImage1,
      leftTag: { text: "10", icon: coinsIcon },
      rightTag: { text: "Free Product Offer" },
      cta: "Check Back Next Week",
      completed: true,
    },
    {
      id: "t2",
      title: "Grocery Knowledge Quiz",
      subtitle: "Test your grocery knowledge and earn bonus chips.",
      image: triviaChallengeImage2,
      leftTag: { text: "5", icon: coinsIcon },
      rightTag: { text: "Quick Win" },
      cta: "Start Quiz",
    },
    {
      id: "t3",
      title: "Food Facts Challenge",
      subtitle: "Answer questions about food facts and nutrition.",
      image: triviaChallengeImage3,
      leftTag: { text: "7", icon: coinsIcon },
      rightTag: { text: "Educational" },
      cta: "Take Challenge",
    },
    {
      id: "t4",
      title: "Weekly Trivia Master",
      subtitle: "Become the trivia master and earn maximum chips.",
      image: triviaChallengeImage4,
      leftTag: { text: "15", icon: coinsIcon },
      rightTag: { text: "Premium" },
      cta: "Play Now",
    },
  ];

  const upcomingChallengeSlides: EventSlideItem[] = [
    {
      id: "u1",
      title: "Complete Our Own Brand Trivia for this Week",
      subtitle: "Get up to 10 chips when you complete the trivia set.",
      image: upcomingChallengeImage1,
      leftTag: { text: "5", icon: coinsIcon },
      rightTag: { text: "Free Product Offer" },
      cta: "Check Back Next Week",
    },
    {
      id: "u2",
      title: "Weekly Shopping Challenge",
      subtitle: "Complete your weekly shopping and earn bonus rewards.",
      image: upcomingChallengeImage2,
      leftTag: { text: "8", icon: coinsIcon },
      rightTag: { text: "Weekly Bonus" },
      cta: "Coming Soon",
    },
    {
      id: "u3",
      title: "Brand Loyalty Program",
      subtitle: "Stay loyal to your favorite brands and earn exclusive chips.",
      image: upcomingChallengeImage3,
      leftTag: { text: "12", icon: coinsIcon },
      rightTag: { text: "Exclusive" },
      cta: "Notify Me",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <SectionHeader
        title="Weekly Challenges"
        actionLabel="View all"
        onPressAction={() => {}}
      />
      <Text style={styles.sectionDescription}>
        Carousel body text lorem ipsum ementum consectetur nulla dignissim.
      </Text>

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

      <SectionHeader
        title="Trivia Challenges"
        actionLabel="View all"
        onPressAction={() => {}}
      />
      <Text style={styles.sectionDescription}>
        Carousel body text lorem ipsum ementum consectetur nulla dignissim.
      </Text>
      <EventCarousel
        items={triviaChallengeSlides}
        onPressCTA={(item) => {
          console.log("Trivia Challenge CTA pressed:", item.title);
        }}
        slideWidth={slideWidth}
        gap={gap}
        bannerHeight={bannerHeight}
        slidePaddingVertical={slidePaddingVertical}
      />

      <SectionHeader
        title="Upcoming Challenges"
        actionLabel="View all"
        onPressAction={() => {}}
      />
      <Text style={styles.sectionDescription}>
        Carousel body text lorem ipsum ementum consectetur nulla dignissim.
      </Text>
      <EventCarousel
        items={upcomingChallengeSlides}
        onPressCTA={(item) => {
          console.log("Upcoming Challenge CTA pressed:", item.title);
        }}
        slideWidth={slideWidth}
        gap={gap}
        bannerHeight={bannerHeight}
        slidePaddingVertical={slidePaddingVertical}
      />

      <CompletedChallengesCard
        onPress={() => {
          console.log("View completed challenges pressed");
        }}
      />

      <View style={{ height: 24 }} />
    </ScrollView>
  );
};

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
