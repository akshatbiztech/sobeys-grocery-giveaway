import React, { useRef } from "react";
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
