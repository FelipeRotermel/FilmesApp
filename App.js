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
    {
      titulo: 'Rubber, O Pneu Assassino',
      genero: 'Terror', 
      imagem: 'https://www.cafecomfilme.com.br/media/k2/items/cache/e027c4032dd7e9a75b2ece7beabff93c_XL.jpg?t=20170825_164600',
    },
    {
      titulo: 'Cocaine Bear', 
      genero: 'Ficção', 
      imagem: 'https://m.media-amazon.com/images/M/MV5BODAwZDQ5ZjEtZDI1My00MTFiLTg0ZjUtOGE2YTBkOTdjODFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Filmes</Text>
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
  nome: {
    fontSize: 50,
    backgroundColor: '#e6faf8',
    width: '100%',
    textAlign: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    marginBottom: 10,
  },
  filmes: {
    width: 150,
    height: 350,
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
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'contain' ,
  },
  titulo: {
    fontSize: 20,
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
