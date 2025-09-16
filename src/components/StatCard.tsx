import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const COLORS = {
  primary: "#0D3A2C",
  card: "#0D3A2C",
  text: "#FFFFFF",
  subtext: "#FFFFFF",
  chipBg: "#0D3A2C",
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onPress?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  onPress,
}) => {
  const CardComponent = onPress ? Pressable : View;

  return (
    <CardComponent
      style={styles.statCard}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.statIcon}>{icon}</View>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value || " "}</Text>
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: "center",
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.text,
    textAlign: "center",
  },
  statLabel: {
    fontSize: 15,
    color: COLORS.subtext,
    marginBottom: 4,
    textAlign: "center",
    fontWeight: "700",
  },
});
