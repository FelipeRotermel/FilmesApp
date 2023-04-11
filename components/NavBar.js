import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';

function Home ({navigation}) {
  return  (
    <ScrollView horizontal pagingEnabled snapToInterval={Dimensions.get('window').width} style={styles.scrollView}>
      <View style={styles.linha}>
        <Card style={styles.card}>
          <Card.Content>
            <Button onPress={() => navigation.navigate('Filmes Avaliados')}>
              <Text style={styles.button}>Avaliados</Text>
            </Button>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Button onPress={() => navigation.navigate('Filmes Recentes')}>
              <Text style={styles.button}>Recentes</Text>
            </Button>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Button onPress={() => navigation.navigate('Filmes Recentes')}>
              <Text style={styles.button}>place</Text>
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
   scrollView: {
   backgroundColor: DefaultTheme.colors.secondaryContainer,
  },
  linha: {
    flexDirection: 'row',
    height: 70,
  },
  card: {
    width: 170,
    borderRadius: 0,
    backgroundColor: '#d292f0',
  },
  button: {
    color: 'black',
    fontSize: 20,
  },
});

export default Home