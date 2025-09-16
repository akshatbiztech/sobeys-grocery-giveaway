import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CouponCarousel } from "./CouponCarousel";
import { CouponCardItem } from "./CouponCard";
import { voilaImage, voilaTextImage } from "../../icons";

const COLORS = {
  background: "#FFFFFF",
  text: "#111827",
  subtext: "#6B7280",
  headerBackground: "#00D6FF", // Cyan blue header
  headerText: "#0D3A2C",
};

interface VoilaCardProps {
  items: CouponCardItem[];
  onCopyCode: (code: string) => void;
  slideWidth: number;
  gap: number;
}

export const VoilaCard: React.FC<VoilaCardProps> = ({
  items,
  onCopyCode,
  slideWidth,
  gap,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={voilaTextImage}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.card}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Voila Free Delivery Coupons</Text>
          <Text style={styles.subtitle}>{items.length} vouchers available</Text>
        </View>

        <CouponCarousel
          items={items}
          onCopyCode={onCopyCode}
          slideWidth={slideWidth}
          gap={gap}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  header: {
    backgroundColor: COLORS.headerBackground,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
  },

  headerImage: {
    height: 40,
    width: 90,
  },

  card: {
    backgroundColor: COLORS.background,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 20,
    borderColor: "#E5E7EB",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  titleSection: {
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.subtext,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  voilaImage: {
    width: 120,
    height: 60,
  },
});
