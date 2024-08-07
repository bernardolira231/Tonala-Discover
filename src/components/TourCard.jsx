import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card } from 'react-native-paper'
import { styles } from '../styles/StyledTourCard'
import { MaterialIcons } from '@expo/vector-icons'

const TourCard = ({ data }) => {
  const navigation = useNavigation()
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: data.images[0] }} />
      <Card.Content>
        <Text style={styles.h1}>{data.title}</Text>
        <Text style={styles.description}>{data.shortdescription}</Text>
        <View style={styles.sectionInfo}>
          <View style={styles.iconSection}>
            <MaterialIcons name='attach-money' size={24} color='#A0522D' style={styles.icon} />
            <Text style={styles.icontext}>{data.price}</Text>
          </View>
          <View style={styles.iconSection}>
            <MaterialIcons name='access-time' size={24} color='#A0522D' style={styles.icon} />
            <Text style={styles.icontext}>{data.duration}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('TourDetails', { data })} style={styles.button}>
            <Text style={styles.buttonText}>More Details</Text>
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  )
}

export default TourCard
