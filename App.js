import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import FilmesRecentes from './screens/FilmesRecentes';
import FilmesAvaliados from './screens/FilmesAvaliados';
import Home from './components/NavBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ 
            headerStyle: { backgroundColor: '#7b00b5'},
            headerTitleStyle: { fontSize: 30, color: 'white'},
            title: 'RatoMorto',
            }}
            name="Home" component={Home} />
          <Stack.Screen options={{ 
            headerStyle: { backgroundColor: '#7b00b5'},
            headerTitleStyle: { fontSize: 30, color: 'white' },
            }}
            name="Filmes Recentes" component={FilmesRecentes} />
          <Stack.Screen
            options={{ 
            headerStyle: { backgroundColor: '#7b00b5'},
            headerTitleStyle: { fontSize: 30, color: 'white' },
            }}
            name="Filmes Avaliados" component={FilmesAvaliados} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}