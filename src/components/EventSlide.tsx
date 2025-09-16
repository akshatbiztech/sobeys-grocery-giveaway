import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import { ChipTag } from "./ChipTag";
import { PrimaryButton } from "./PrimaryButton";
import { tickIcon } from "../icons";

const COLORS = {
  card: "#FFFFFF",
  text: "#111827",
  subtext: "#6B7280",
};

export type EventSlideItem = {
  id: string;
  title: string;
  subtitle?: string; // For challenges
  body?: string; // For sweepstakes
  image: any; // local require or {uri}
  leftTag?: { text: string; icon?: any };
  middleTag?: { text: string; icon?: any };
  rightTag?: { text: string };
  cta: string;
  completed?: boolean;
};

interface EventSlideProps {
  item: EventSlideItem;
  onPress: () => void;
  width: number;
  paddingVertical: number;
  bannerHeight: number;
}

export const EventSlide: React.FC<EventSlideProps> = ({
  item,
  onPress,
  width,
  paddingVertical,
  bannerHeight,
}) => {
  return (
    <View style={[styles.slideCard, { width, paddingVertical }]}>
      {item.completed && (
        <View style={styles.completedBadge}>
          <Image
            source={tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.completedText}>Completed</Text>
        </View>
      )}
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={item.image}
          style={[styles.banner, { height: bannerHeight }]}
          imageStyle={styles.bannerImage}
        />
        {item.completed && (
          /* Tint overlay */
          <View style={[styles.tintOverlay, { height: bannerHeight }]} />
        )}
      </View>

      {/* Tags - only show if they exist */}
      {(item.leftTag || item.middleTag || item.rightTag) && (
        <View style={styles.tagsRow}>
          {item.leftTag ? (
            <ChipTag
              text={item.leftTag.text}
              backgroundColor="#0D3A2C"
              textColor="#FFFFFF"
              icon={
                item.leftTag.icon ? (
                  <Image
                    source={item.leftTag.icon}
                    style={{ width: 14, height: 14 }}
                    resizeMode="contain"
                  />
                ) : undefined
              }
            />
          ) : null}
          {item.middleTag ? (
            <Image source={item.middleTag.icon} resizeMode="contain" />
          ) : null}
          {item.rightTag ? (
            <ChipTag
              text={item.rightTag.text}
              backgroundColor="#FFFFFF"
              textColor="#111827"
            />
          ) : null}
        </View>
      )}

      <Text style={styles.cardTitle}>{item.title}</Text>

      {/* Use subtitle for challenges, body for sweepstakes */}
      <Text style={styles.cardBody}>{item.subtitle || item.body}</Text>

      <PrimaryButton
        title={item.cta}
        onPress={onPress}
        disabled={item.completed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slideCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  bannerContainer: {
    position: "relative",
    marginBottom: 10,
  },
  banner: { borderRadius: 12 },
  bannerImage: { borderRadius: 12 },
  tintOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#C4C4C4",
    borderRadius: 12,
    opacity: 0.8,
  },
  completedBadge: {
    position: "absolute",
    top: 4,
    left: 4,
    backgroundColor: "#00C851",
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    zIndex: 10,
  },
  tickIcon: {
    width: 14,
    height: 14,
    tintColor: "#FFFFFF",
  },
  completedText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  tagsRow: { flexDirection: "row", gap: 8, marginBottom: 10 },
  cardTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 6,
  },
  cardBody: { fontSize: 14, color: COLORS.text, marginBottom: 25 },
});
