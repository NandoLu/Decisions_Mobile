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
        <View style={estilos.cenarios}>
          <View style={estilos.cenario}>
            <Text>Brasil, 1950</Text>
          </View>
          <View style={estilos.cenario}>
            <Text>EUA, 1950</Text>
          </View>
        </View>

        
        <Link href={"/game"} style={estilos.button}>  
          <Text style={estilos.text}>Começar</Text>
        </Link>
        </View>
        

      
    </ImageBackground>
  );
}