import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { CouponCard, CouponCardItem } from "./CouponCard";

interface CouponCarouselProps {
  items: CouponCardItem[];
  onCopyCode: (code: string) => void;
  slideWidth: number;
  gap: number;
}

export const CouponCarousel: React.FC<CouponCarouselProps> = ({
  items,
  onCopyCode,
  slideWidth,
  gap,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.carouselContainer,
        { paddingHorizontal: gap },
      ]}
      style={styles.scrollView}
    >
      {items.map((item) => (
        <CouponCard
          key={item.id}
          item={item}
          width={slideWidth}
          onCopyCode={onCopyCode}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingVertical: 4,
  },
  scrollView: {
    flexGrow: 0,
  },
});
