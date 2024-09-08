import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router";
import estilos from '../styles/styles';

export default function Home() {

  return (
    <ImageBackground source={require('../assets/images/worldmap.png')} style={estilos.background}>
      <StatusBar hidden={true} />

      <View style={estilos.container}>
        <Text style={estilos.title}>Decisions</Text>
        
        <Link href={"/saves"} style={estilos.button}>  
          <Text style={estilos.text}>Jogar</Text>
        </Link>

        <View style={estilos.btn}>
        <Link href={"/saves"} style={estilos.button2}>  
          <Text style={estilos.text2}>Pontuações</Text>
        </Link>
        <Link href={"/saves"} style={estilos.button2}>  
          <Text style={estilos.text2}>Configurações</Text>
        </Link>
        </View>
        

      </View>
    </ImageBackground>
  );
}