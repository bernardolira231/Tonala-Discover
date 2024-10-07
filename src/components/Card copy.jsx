import React, { useState, useRef } from 'react'
import { View, StyleSheet, Image, FlatList, Text, Dimensions, Pressable } from 'react-native'

const HEIGHT = 225
const WIDTH = Dimensions.get('window').width

export default function Card ({ images = [], heading, subheading, stars, style, onPress, ...rest }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index)
    }
  })

  return (
    <View style={[styles.cardContainer, style]} {...rest}>
      <Pressable onPress={onPress} style={{ flex: 1 }}>
        {/* Images */}
        {images.length > 0 && (
          <FlatList
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            snapToAlignment='center'
            pagingEnabled
            viewabilityConfig={viewabilityConfig.current}
            onViewableItemsChanged={handleViewableItemsChanged.current}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
              </View>
            )}
          />
        )}
        {/* Dot Container */}
        {images.length > 1 && (
          <View style={styles.dotContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  {
                    opacity: index === activeIndex ? 1 : 0.5
                  },
                  styles.dot
                ]}
              />
            ))}
          </View>
        )}
        {/* Text Container */}
        <View style={styles.textContainer}>
          <View style={styles.starContainer}>
            <Text style={styles.starText}>⭐ {stars}</Text>
          </View>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>${subheading}/night</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    width: WIDTH - 40,
    borderRadius: 10,
    backgroundColor: '#eaa',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  },
  imageContainer: { width: WIDTH - 60 },
  image: {
    width: '100%',
    height: HEIGHT,
    borderRadius: 10
  },
  dotContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: HEIGHT - 20,
    alignSelf: 'center'
  },
  dot: {
    width: 5,
    height: 5,
    margin: 3,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  textContainer: { marginTop: 10, paddingHorizontal: 10 },
  starContainer: { flexDirection: 'row', alignItems: 'center' },
  starText: { marginLeft: 5 },
  heading: { fontSize: 20, fontWeight: 'bold' },
  subheading: { fontSize: 18, marginTop: 5, color: '#555' }
})
