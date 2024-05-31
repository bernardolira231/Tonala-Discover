import React from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Asegúrate de tener expo-vector-icons instalado
import CarouselItem from "./CarouselItem.jsx";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const TryCarousel = ({ header, data, screen }) => {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const limitedData = [
    ...data.slice(0, 4),
    { id: "show-more", type: "show-more" },
  ];

  const renderItem = ({ item }) => {
    if (item.type === "show-more") {
      return (
        <View style={styles.showMoreContainer}>
          <TouchableOpacity
            style={styles.showMoreButton}
            onPress={() => navigation.navigate(screen)}
          >
            <AntDesign name="arrowright" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.showMoreText}>Show More</Text>
        </View>
      );
    }
    return <CarouselItem {...item} />;
  };

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
        snapToInterval={width * 0.8} // Ajusta el ancho para el carrusel
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100, // Ajusta según sea necesario
  },
  h1: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginVertical: 10,
    color: "#202020",
  },
  carouselContainer: {
    paddingTop: -30,
  },
  showMoreContainer: {
    width: 80,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 15,
    paddingTop: 10,
  },
  showMoreButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FF6347",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  showMoreText: {
    color: "#FF6347",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default TryCarousel;
