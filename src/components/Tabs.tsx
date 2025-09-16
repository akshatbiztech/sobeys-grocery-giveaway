import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const COLORS = {
  primary: "#0D3A2C",
  border: "#E5E7EB",
};

type TabKey = "Overview" | "Challenges" | "Sweepstakes" | "Dashboard";

interface TabsProps {
  items: TabKey[];
  active: TabKey;
  onChange: (k: TabKey) => void;
}

export const Tabs: React.FC<TabsProps> = ({ items, active, onChange }) => {
  return (
    <View style={styles.tabsWrap}>
      <View style={styles.tabsRow}>
        {items.map((k) => {
          const isActive = k === active;
          return (
            <Pressable
              key={k}
              onPress={() => onChange(k)}
              style={({ pressed }) => [
                styles.tabItem,
                pressed && { opacity: 0.7 },
              ]}
            >
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                {k}
              </Text>
              {isActive && <View style={styles.tabUnderline} />}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.tabsDivider} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsWrap: { marginTop: 4 },
  tabsRow: { flexDirection: "row", justifyContent: "space-between" },
  tabItem: { flex: 1, alignItems: "center",  },
  tabText: { fontSize: 15, color: "#000000", fontWeight: "400" },
  tabTextActive: { color: COLORS.primary, fontWeight: "700" },
  tabUnderline: {
    height: 3,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginTop: 8,
    width: "100%",
  },
  tabsDivider: { height: 1, backgroundColor: COLORS.border },
});
