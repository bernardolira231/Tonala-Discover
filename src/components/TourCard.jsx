import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'
import { styles } from '../styles/StyledTourCard'
import { MaterialIcons } from '@expo/vector-icons'

const TourCard = () => {
  return (
    <Card style={styles.card} mode='contained'>
      <Card.Cover source={{ uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fb/76/de.jpg' }} />
      <Card.Content>
        <Text style={styles.h1}>Tour Tonalá – Tlaquepaque</Text>
        <Text>Recorreremos Tonalá y Tlaquepaque y sus lugares más representativos.</Text>
        <View style={styles.sectionInfo}>
          <View style={styles.iconSection}>
            <MaterialIcons name='attach-money' size={24} color='black' style={styles.icon} />
            <Text>1,290.00 MXN</Text>
          </View>
          <View style={styles.iconSection}>
            <MaterialIcons name='access-time' size={24} color='black' style={styles.icon} />
            <Text>6 hours</Text>
          </View>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button>More Details</Button>
      </Card.Actions>
    </Card>
  )
}

export default TourCard
