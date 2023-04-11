import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { DefaultTheme } from 'react-native-paper';

export default function FilmesAvaliados() {

    const [filmesAvaliados, setFilmesAvaliados] = useState([ 
        {
          id: 6,
          titulo: 'Call of Gruty', 
          genero: 'Ação, Drama', 
          imagem: 'https://static.wikia.nocookie.net/unmario/images/6/68/DfVsX7yWAAIhcje.jpg/revision/latest?cb=20180708224427',
        },
        {
          id: 7,
          titulo: 'John Wick 4: Baba Yaga',
          genero: 'Ação', 
          imagem: 'https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg',
        },
        {
          id: 8,
          titulo: 'Jogos Mortais: Jigsaw', 
          genero: 'Terror, Suspense', 
          imagem: 'https://br.web.img3.acsta.net/pictures/17/11/17/23/57/4731159.jpg',
        },
        {
          id: 9,
          titulo: 'Velozes & Furiosos 10',
          genero: 'Ação',
          imagem: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/15/250607309-24954792ccec90c1f7b67228dd0c9760.jpg',
        },
        {
          id: 10,
          titulo: 'Piranha 2',
          genero: 'Terror, Comédia',
          imagem: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d6c7b1d31e9645e99ffb8427d97046560df0609546ac1cd0851df0f891d5e602._RI_V_TTW_.jpg',
        },
      ]);

  function Card(props){
    function excluirFilme() {
      setFilmesAvaliados(filmesAvaliados.filter(filme => filme.id !== props.filme.id));
    }
    return(
      <View style={styles.filmes}>
        <Image style={styles.imagens} source={{uri: props.filme.imagem}} />
        <Text style={styles.titulo}>{props.filme.titulo}</Text>
        <Text style={styles.texto}>{props.filme.genero}</Text>
        <TouchableOpacity onPress={excluirFilme}>
          <Image style={styles.lixo} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png'}} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>Avaliados</Text>
        <ScrollView horizontal pagingEnabled>
          {filmesAvaliados.map(filme => <Card key={filme.id} filme={filme} />)}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.secondaryContainer,
    height: '100%',
  },
  filmes: {
    width: 150,
    height: 370,
    paddingBottom: 10,
    backgroundColor: '#fff',
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
    height: 270,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    resizeMode: 'stretch',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 50,
    marginLeft: 5,
  },
  texto: {
    textAlign: 'left',
    height: 50,
    fontSize: 19,
    color: 'blue',
    marginLeft: 5,
  },
  categoria: {
    fontSize: 30,
    marginLeft: 7,
  },
  lixo: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    bottom: 1,
  },
});