import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const COLORS = {
  text: "#111827",
  link: "#0D3A2C",
};

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  actionLabel,
  onPressAction,
}) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onPressAction}>
          <Text style={styles.sectionAction}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    flex: 1,
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
  },
  sectionAction: { fontSize: 14, fontWeight: "700", color: COLORS.link },
});


