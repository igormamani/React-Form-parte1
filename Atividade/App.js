import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import estilo from './src/estilo';

export default function App() {
  return (
    <View style={estilo.container}>
      <LinearGradient 
      colors = {['purple','#FF4500']}
      style = {estilo.gradienteBackground}
      >
        
      </LinearGradient>

      <Image
        source= {{uri:'https://pbs.twimg.com/media/FqyR6qzakAIx6qr?format=jpg&name=small'}}
        style = {estilo.Image}
        
      />
       <View style = {estilo.box} >
          <TextInput style={estilo.input} placeholder="Digite o seu Email"></TextInput>
          <TextInput style={estilo.input} placeholder="Digite sua senha"></TextInput>

      </View>
    </View>
  );
}
