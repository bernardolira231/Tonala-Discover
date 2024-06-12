import React from 'react'
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/StyledCarousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'

const { width } = Dimensions.get('window')

const TryCarousel = ({ header, data, screen, type, map, extraField = [] }) => {
  const navigation = useNavigation()
  const scrollX = React.useRef(new Animated.Value(0)).current
  const limitedData = [
    ...data.slice(0, 4),
    { id: 'show-more', type: 'show-more' }
  ]

  const renderItem = ({ item }) => {
    if (item.type === 'show-more') {
      return (
        <View style={styles.showMoreContainer}>
          <TouchableOpacity
            style={styles.showMoreButton}
            onPress={() => navigation.navigate(screen)}
          >
            <AntDesign name='arrowright' size={24} color='#fff' />
          </TouchableOpacity>
          <Text style={styles.showMoreText}>Show More</Text>
        </View>
      )
    }
    if (type === 'dish') {
      return <CarouselItem props={item} type={type} />
    }
    if (type === 'fashion') {
      return <CarouselItem props={item} type={type} map={map} extraFields={extraField} />
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{header}</Text>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        nestedScrollEnabled
        data={limitedData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
        snapToInterval={width * 0.8}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default TryCarousel
