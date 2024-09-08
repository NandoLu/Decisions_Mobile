import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router";
import estilos from "@/styles/styles";

export default function Saves() {

  return (
    <ImageBackground source={require('../assets/images/worldmap.png')} style={estilos.background}>
      <StatusBar hidden={true} />

      <View style={estilos.container}>
        <Text style={estilos.title}>Decisions</Text>
        
          <View style={estilos.save}>

          </View>
        
        <Link href={"/cenarios"} style={estilos.button}>  
          <Text style={estilos.text}>Novo Jogo</Text>
        </Link>
        </View>
        

      
    </ImageBackground>
  );
}
