import React, { useState } from "react";
import { StatusBar, Text, View, ImageBackground } from "react-native";
import Slider from "@react-native-community/slider";
import estilos from "@/styles/style_game";
import GameLogic from "@/logic/gameLogic";

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function App() {
  const [economia, setEconomia] = useState(100);

  const [renda, setRenda] = useState(0);
  
  const [popularidade, setPopularidade] = useState(50);

  const [poder, setPoder] = useState(5);

  const [ano, setAno] = useState(new Date().getFullYear());
  const [mes, setMes] = useState(0);

  return (
    <ImageBackground source={require('../assets/images/worldmap.png')} style={estilos.background}>
      <StatusBar hidden={true} />
      <View style={estilos.barraSuperior}>
        <Text style={estilos.textoBarraSuperior}>Economia: {economia}</Text>
        <Text style={estilos.textoBarraSuperior}>Renda: {renda}</Text>
        <Text style={estilos.textoBarraSuperior}>Popularidade: {popularidade}%</Text>
        <Text style={estilos.textoBarraSuperior}>Poder: {poder}</Text>
        <Text style={estilos.textoBarraSuperior}>{ano}, {meses[mes]}</Text>
      </View>
      <GameLogic 
        economia={economia} setEconomia={setEconomia}
        renda={renda} setRenda={setRenda}
        popularidade={popularidade} setPopularidade={setPopularidade}
        poder={poder} setPoder={setPoder}
        ano={ano} setAno={setAno}
        mes={mes} setMes={setMes}
      />
    </ImageBackground>
  );
}
