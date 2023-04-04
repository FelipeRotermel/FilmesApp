import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Home ({navigation}) {
  return  (
    <ScrollView horizontal pagingEnabled style={styles.scrollView}>
        <View style={styles.linha}>
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Filmes Avaliados')}>
            Avaliados
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Filmes Recentes')}>
            Recentes
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Filmes Recentes')}>
            blah
          </Button>
        </Card.Content>
      </Card>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
   scrollView: {
   backgroundColor: DefaultTheme.colors.primaryContainer,
  },
  linha: {
    flexDirection: 'row',
    height: 80,
  },
  card: {
    width: 170,
    borderRadius: 0,
  }
});

export default Home