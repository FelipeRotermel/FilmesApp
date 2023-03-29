import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function filmesRecentes() {

  const [filmesRecentes, setFilmesRecentes] = useState([ 
    {
      id: 1,
      titulo: 'Cocaine Bear', 
      genero: 'Ficção', 
      imagem: 'https://m.media-amazon.com/images/M/MV5BODAwZDQ5ZjEtZDI1My00MTFiLTg0ZjUtOGE2YTBkOTdjODFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
      id: 2,
      titulo: 'Rubber, O Pneu Assassino',
      genero: 'Terror', 
      imagem: 'https://www.cafecomfilme.com.br/media/k2/items/cache/e027c4032dd7e9a75b2ece7beabff93c_XL.jpg?t=20170825_164600',
    },
    {
      id: 3,
      titulo: 'Onde os fracos não têm vez', 
      genero: 'Suspense, Drama', 
      imagem: 'https://br.web.img3.acsta.net/pictures/210/079/21007978_20130523175557996.jpg',
    },
    {
      id: 4,
      titulo: 'Click',
      genero: 'Comédia, Drama',
      imagem: 'https://www.cafecomfilme.com.br/media/k2/items/cache/99a55ddf297fe1c0e5cd25b32402e97a_XL.jpg?t=20200716_212331',
    },
    {
      id: 5,
      titulo: 'Ataque Do Tubarão De 5 Cabeças',
      genero: 'Terror',
      imagem: 'https://br.web.img2.acsta.net/pictures/22/04/28/18/27/3434343.png',
    },
  ]);

  function Card(props){
    function excluirFilme() {
      setFilmesRecentes(filmesRecentes.filter(filme => filme.id !== props.filme.id));
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
    <View>
      <Text style={styles.categoria}>Recentes</Text>
        <ScrollView horizontal pagingEnabled>
          {filmesRecentes.map(filme => <Card key={filme.id} filme={filme} />)}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filmes: {
    width: 150,
    height: 370,
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
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