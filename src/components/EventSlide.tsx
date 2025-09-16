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
  subtitle?: string;
  body?: string;
  image: any;
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
  fixedHeight?: number;
}

export const EventSlide: React.FC<EventSlideProps> = ({
  item,
  onPress,
  width,
  paddingVertical,
  bannerHeight,
  fixedHeight,
}) => {
  return (
    <View style={[styles.container, { width, height: fixedHeight }]}>
      <View style={styles.header}>
        <ImageBackground
          source={item.image}
          style={[styles.banner, { height: bannerHeight }]}
          imageStyle={styles.bannerImage}
        />
        {item.completed && (
          <View style={[styles.tintOverlay, { height: bannerHeight }]} />
        )}
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
      </View>

      <View style={[styles.card, { paddingVertical, flex: 1 }]}>
        <View style={styles.contentContainer}>
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

          <Text style={styles.cardBody}>{item.subtitle || item.body}</Text>
        </View>

        <PrimaryButton
          title={item.cta}
          onPress={onPress}
          disabled={item.completed}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  header: {
    position: "relative",
    overflow: "hidden",
  },
  banner: {
    width: "100%",
  },
  bannerImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tintOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#C4C4C4",
    opacity: 0.8,
  },
  completedBadge: {
    position: "absolute",
    top: 8,
    left: 8,
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
  card: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
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
