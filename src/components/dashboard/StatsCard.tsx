import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const COLORS = {
  background: "#FFFFFF",
  text: "#111827",
  subtext: "#6B7280",
  buttonText: "#FFFFFF",
  buttonBackground: "#0D3A2C",
  statsBackground: "#F3F4F6",
  statsLabel: "#6B7280",
  statsValue: "#111827",
};

interface StatsCardProps {
  headerImage: any;
  title: string;
  description: string;
  statsLabel: string;
  statsValue: string;
  buttonText: string;
  onButtonPress: () => void;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  headerImage,
  title,
  description,
  statsLabel,
  statsValue,
  buttonText,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Header with image */}
      <View style={styles.header}>
        <Image
          source={headerImage}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      {/* Main card container */}
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Stats display */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsLabel}>{statsLabel}</Text>
          <Text style={styles.statsValue}>{statsValue}</Text>
        </View>

        {/* Action button */}
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
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
    height: 80,
    overflow: "hidden",
  },

  headerImage: {
    height: 80,
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  card: {
    backgroundColor: COLORS.background,
    padding: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 20,
    lineHeight: 22,
  },

  statsContainer: {
    backgroundColor: COLORS.statsBackground,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },

  statsLabel: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 4,
  },

  statsValue: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.statsValue,
  },

  button: {
    backgroundColor: COLORS.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.buttonText,
  },
});
