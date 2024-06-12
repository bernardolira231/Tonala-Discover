import React from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDetailsScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'

const Details = ({ route }) => {
  const { name, description, image, extraFields } = route.params

  const data = [
    { key: 'Production Time', value: extraFields.productionTime },
    { key: 'Collection', value: extraFields.collectionName },
    { key: 'Collaborations', value: extraFields.collaboration },
    { key: 'Designed by', value: extraFields.designedBy },
    { key: 'Type', value: extraFields.itemType }
  ]

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, globalStyles.bgColor]}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.header}>
            <View style={styles.firstpart}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.secondpart}>
              <FlatList
                scrollEnabled={false}
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.textInfo}>{item.key}: {item.value}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Details
