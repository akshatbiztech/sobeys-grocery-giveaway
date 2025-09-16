import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { PrimaryButton } from "./PrimaryButton";

const COLORS = {
  card: "#FFFFFF",
  text: "#111827",
  border: "#E5E7EB",
  primary: "#0D3A2C",
};

interface CompletedChallengesCardProps {
  onPress: () => void;
}

export const CompletedChallengesCard: React.FC<
  CompletedChallengesCardProps
> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          See all your completed challenges in one place.
        </Text>

        <PrimaryButton
          title="View Completed Challenges"
          onPress={onPress}
        />

        <View style={styles.swipeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 32,
  },
  button: {
    marginBottom: 16,
  },
  swipeIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#D1D5DB",
    borderRadius: 2,
  },
});


