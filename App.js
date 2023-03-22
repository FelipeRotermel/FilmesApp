import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {

  function Card(props){
    return(
      <View style={styles.filmes}>
        <Image style={styles.imagens} source={{uri: props.filme.imagem}} />
        <Text style={styles.titulo}>{props.filme.titulo}</Text>
        <Text style={styles.texto}>{props.filme.genero}</Text>
      </View>
    )
  }

  const filmes = [ 
    {
      titulo: 'Cocaine Bear', 
      genero: 'Ficção', 
      imagem: 'https://m.media-amazon.com/images/M/MV5BODAwZDQ5ZjEtZDI1My00MTFiLTg0ZjUtOGE2YTBkOTdjODFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filmes</Text>
      <ScrollView horizontal pagingEnabled>
        {filmes.map(filme => <Card filme={filme} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  filmes: {
    width: 150,
    height: 300,
    backgroundColor: '#e6faf8',
    justifyContent: 'center', 
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    margin: 7,
  },
  imagens: {
    maxWidth: 150,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'center' ,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    textAlign: 'left',
    height: 50,
    fontSize: 19,
    color: 'blue',
    marginLeft: 5,
  },
});
