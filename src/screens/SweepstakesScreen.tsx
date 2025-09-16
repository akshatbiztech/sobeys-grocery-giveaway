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
import { EventSlide, EventSlideItem } from "../components/EventSlide";
import {
  sweepstakesImage2,
  sweepstakesImage3,
  sweepstakesImage4,
  sweepstakesImage5,
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

interface SweepstakesScreenProps {
  slideWidth: number;
  gap: number;
  bannerHeight: number;
  slidePaddingVertical: number;
}

export const SweepstakesScreen: React.FC<SweepstakesScreenProps> = ({
  slideWidth,
  gap,
  bannerHeight,
  slidePaddingVertical,
}) => {
  const sweepstakesSlides: EventSlideItem[] = [
    {
      id: "s1",
      title: "1 Million Scene+ Points!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: sweepstakesImage2,
      cta: "Enter Sweepstake",
    },
    {
      id: "s2",
      title: "Sweepstake Title #2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: sweepstakesImage3,
      cta: "Enter Sweepstake",
    },
    {
      id: "s3",
      title: "Sweepstake Title #3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: sweepstakesImage4,
      cta: "Enter Sweepstake",
    },
    {
      id: "s4",
      title: "Sweepstake Title #4",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: sweepstakesImage5,
      cta: "Enter Sweepstake",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Sweepstakes */}
      <SectionHeader
        title="Sweepstakes"
        actionLabel="View all"
        onPressAction={() => {}}
      />
      <Text style={styles.sectionDescription}>
        Carousel body text lorem ipsum ementum consectetur nulla dignissim.
      </Text>

      {/* Sweepstakes Cards - Direct EventSlide components */}
      <View style={styles.sweepstakesContainer}>
        {sweepstakesSlides.map((item, index) => (
          <EventSlide
            key={item.id}
            item={item}
            onPress={() => {
              console.log("Sweepstakes CTA pressed:", item.title);
            }}
            width={slideWidth}
            paddingVertical={slidePaddingVertical}
            bannerHeight={bannerHeight}
          />
        ))}
      </View>

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
  sweepstakesContainer: {
    gap: 16,
  },
});
