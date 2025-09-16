import React, { useRef, useMemo } from "react";
import { View, FlatList, ViewToken, StyleSheet } from "react-native";
import { EventSlide, EventSlideItem } from "./EventSlide";

interface EventCarouselProps {
  items: EventSlideItem[];
  onPressCTA: (item: EventSlideItem) => void;
  slideWidth: number;
  gap: number;
  bannerHeight: number;
  slidePaddingVertical: number;
}

export const EventCarousel: React.FC<EventCarouselProps> = ({
  items,
  onPressCTA,
  slideWidth,
  gap,
  bannerHeight,
  slidePaddingVertical,
}) => {
  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 60 }).current;
  const onViewableItemsChanged = useRef(
    (_: { viewableItems: ViewToken[] }) => {}
  );

  const maxSlideHeight = useMemo(() => {
    const baseHeight = bannerHeight + slidePaddingVertical * 2;

    const contentHeights = items.map((item) => {
      let contentHeight = 0;

      if (item.leftTag || item.middleTag || item.rightTag) {
        contentHeight += 30;
      }

      const titleLines = Math.ceil(item.title.length / 25);
      contentHeight += titleLines * 30;

      const bodyText = item.subtitle || item.body || "";
      const bodyLines = Math.ceil(bodyText.length / 35);
      contentHeight += bodyLines * 20;

      contentHeight += 50;

      return baseHeight + contentHeight;
    });

    return Math.max(...contentHeights);
  }, [items, bannerHeight, slidePaddingVertical]);

  return (
    <View style={styles.carouselWrap}>
      <FlatList
        horizontal
        data={items}
        keyExtractor={(it) => it.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <EventSlide
            item={item}
            onPress={() => onPressCTA(item)}
            width={slideWidth}
            paddingVertical={slidePaddingVertical}
            bannerHeight={bannerHeight}
            fixedHeight={maxSlideHeight}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ width: gap }} />}
        snapToInterval={slideWidth + gap}
        decelerationRate="fast"
        pagingEnabled={false}
        contentContainerStyle={{ paddingRight: 2 }}
        getItemLayout={(_, i) => ({
          length: slideWidth + gap,
          offset: (slideWidth + gap) * i,
          index: i,
        })}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselWrap: { marginBottom: 16 },
});
