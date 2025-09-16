import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { calendarIcon, linkIcon, copyIcon } from "../../icons";

const COLORS = {
  border: "#0D3A2C",
  text: "#111827",
  subtext: "#6B7280",
  background: "#FFFFFF",
  couponBackground: "#F9FAFB",
  copyButton: "#F3F4F6",
  activeBadge: "#35A131",
};

export type CouponCardItem = {
  id: string;
  validUntil: string;
  status: "Active" | "Expired";
  couponCode: string;
  earnedFrom: string;
};

interface CouponCardProps {
  item: CouponCardItem;
  width: number;
  onCopyCode: (code: string) => void;
}

export const CouponCard: React.FC<CouponCardProps> = ({
  item,
  width,
  onCopyCode,
}) => {
  return (
    <View style={[styles.couponCard, { width }]}>
      {/* Header with validity and status */}
      <View style={styles.cardHeader}>
        <View style={styles.validityContainer}>
          <Image
            source={calendarIcon}
            style={styles.calendarIcon}
            resizeMode="contain"
          />
          <Text style={styles.validityText}>Valid until {item.validUntil}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: item.status === "Active" ? "#EAF6EC" : "#EF4444",
              borderColor:
                item.status === "Active" ? COLORS.activeBadge : "transparent",
              borderWidth: item.status === "Active" ? 1 : 0,
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color:
                  item.status === "Active" ? COLORS.activeBadge : "#FFFFFF",
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      {/* Coupon Code Section */}
      <View style={styles.couponCodeSection}>
        <View style={styles.couponCodeContainer}>
          <Text style={styles.couponLabel}>Coupon Code</Text>
          <View style={styles.couponCodeRow}>
            <Text style={styles.couponCode}>{item.couponCode}</Text>
            <Pressable
              style={styles.copyButton}
              onPress={() => onCopyCode(item.couponCode)}
            >
              <Image
                source={copyIcon}
                style={styles.copyIcon}
                resizeMode="contain"
              />
              <Text style={styles.copyText}>Copy</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Earning Source */}
      <Text style={styles.earnedFrom}>Earned from '{item.earnedFrom}'</Text>

      {/* Use Now Button */}
      <Pressable style={styles.useButton}>
        <Image
          source={linkIcon}
          style={styles.useButtonIcon}
          resizeMode="contain"
        />
        <Text style={styles.useButtonText}>Use Now on Voila</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  couponCard: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginRight: 12,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  validityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  calendarIcon: {
    width: 18,
    height: 18,
  },

  validityText: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: "500",
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },

  couponCodeSection: {
    marginBottom: 12,
  },

  couponLabel: {
    fontSize: 12,
    color: COLORS.subtext,
    marginBottom: 8,
  },

  couponCodeContainer: {
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 12,
    flexDirection: "column",
    gap: 0,
  },

  couponCodeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  couponCode: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    letterSpacing: 1,
  },

  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.copyButton,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
    alignSelf: "center",
  },

  copyIcon: {
    width: 12,
    height: 12,
  },

  copyText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: "600",
  },

  earnedFrom: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 16,
  },

  useButton: {
    backgroundColor: COLORS.border,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  useButtonIcon: {
    width: 16,
    height: 16,
    tintColor: "#FFFFFF",
  },

  useButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
