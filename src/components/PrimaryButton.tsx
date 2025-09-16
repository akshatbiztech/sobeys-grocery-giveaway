import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const COLORS = {
  primary: "#0D3A2C",
};

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={({ pressed }) => [
        styles.primaryBtn,
        disabled && styles.disabledBtn,
        pressed && !disabled && { opacity: 0.85 },
      ]}
      android_ripple={disabled ? undefined : { color: "#0b2e23" }}
    >
      <Text style={[styles.primaryBtnText, disabled && styles.disabledBtnText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "800", fontSize: 14 },
  disabledBtn: {
    backgroundColor: "#F4F4F4",
  },
  disabledBtnText: {
    color: "#313131",
  },
});
