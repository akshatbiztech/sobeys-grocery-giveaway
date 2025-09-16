import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ChipTagProps {
  icon?: React.ReactNode;
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

export const ChipTag: React.FC<ChipTagProps> = ({
  icon,
  text,
  backgroundColor = "#FFFFFF",
  textColor = "#111827",
}) => {
  return (
    <View style={[styles.chip, { backgroundColor }]}>
      <Text style={[styles.chipText, { color: textColor }]}>{text}</Text>
      {icon ? <View style={{ marginLeft: 6 }}>{icon}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  chipText: { fontSize: 12, fontWeight: "700" },
});
