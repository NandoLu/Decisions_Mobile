import React, { useState } from "react";
import { StatusBar, Text, View, ImageBackground, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import estilos from "@/styles/style_game";
import GameLogic from "@/logic/gameLogic";

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function App() {
  const [economia, setEconomia] = useState(100);
  const [renda, setRenda] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [popularidade, setPopularidade] = useState(50);
  const [poder, setPoder] = useState(5);
  const [ano, setAno] = useState(new Date().getFullYear());
  const [mes, setMes] = useState(0); // Janeiro
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEconomiaVisible, setModalEconomiaVisible] = useState(false);
  const [impostos, setImpostos] = useState(0);
  const [impostoRenda, setImpostoRenda] = useState(0);

  const decretaMudanca = () => {
    GameLogic.decretaMudanca(impostos, impostoRenda, economia, setEconomia, renda, setRenda, gastos, setGastos, popularidade, setPopularidade, poder, setPoder);
    setModalVisible(false);
  };

  const pularTurno = () => {
    GameLogic.pularTurno(economia, setEconomia, renda, setRenda, gastos, setGastos, popularidade, setPopularidade, poder, setPoder, ano, setAno, mes, setMes);
  };

  return (
    <ImageBackground source={require('../assets/images/worldmap.png')} style={estilos.background}>
      <StatusBar hidden={true} />
      <View style={estilos.barraSuperior}>
        <Text style={estilos.textoBarraSuperior}>Economia: {economia} M</Text>
        <Text style={estilos.textoBarraSuperior}>Receita: {renda} M</Text>
        <Text style={estilos.textoBarraSuperior}>Gastos: {gastos} M</Text>
        <Text style={estilos.textoBarraSuperior}>Popularidade: {popularidade}%</Text>
        <Text style={estilos.textoBarraSuperior}>Poder: {poder}</Text>
        <Text style={estilos.textoBarraSuperior}>{ano}, {meses[mes]}</Text>
      </View>
      <View style={estilos.container}>
        <View style={estilos.colunas}>
          <TouchableOpacity style={estilos.botaoSetor} onPress={() => setModalEconomiaVisible(true)}>
            <Text style={estilos.textoBotao}>Economia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Educação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Saúde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor} onPress={() => setModalVisible(true)}>
            <Text style={estilos.textoBotao}>Impostos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Segurança</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Política Externa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Benefícios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Infraestrutura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoSetor}>
            <Text style={estilos.textoBotao}>Desenvolvimento</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.botoes}>
          <TouchableOpacity style={estilos.botao} onPress={pularTurno}>
            <Text style={estilos.botaoTexto}>Pular</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={estilos.modalView}>
          <TouchableOpacity style={estilos.botaoFechar} onPress={() => setModalVisible(false)}>
            <Text style={estilos.textoBotaoFechar}>Fechar</Text>
          </TouchableOpacity>
            <View style={estilos.itensModal}>
              <View style={estilos.colunaModal1}>
                <Text style={estilos.textoModal}>Impostos Baixa Renda</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                <Text style={estilos.textoModal}>Imposto Média Renda</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                <Text style={estilos.textoModal}>Imposto Alta Renda</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                <Text style={estilos.textoModal}>Imposto de Renda</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                
              </View>
              <View style={estilos.colunaModal2}>
                <Text style={estilos.textoModal}>Imposto sobre Venda</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                <Text style={estilos.textoModal}>Imposto Corporativo</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                <Text style={estilos.textoModal}>Imposto sobre Faturamento</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                <Text style={estilos.textoModal}>Imposto sobre Herança</Text>
                <Slider
                  style={estilos.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={impostos}
                  onValueChange={setImpostos}
                  minimumTrackTintColor="red"
                  thumbTintColor="red"
                />
                
              </View>
            </View>
          <TouchableOpacity style={estilos.botaoDecretar} onPress={decretaMudanca}>
            <Text style={estilos.textoBotaoDecretar}>Decretar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEconomiaVisible}
        onRequestClose={() => setModalEconomiaVisible(false)}
      >
        <View style={estilos.modalView}>
          <TouchableOpacity style={estilos.botaoFechar} onPress={() => setModalEconomiaVisible(false)}>
            <Text style={estilos.textoBotaoFechar}>Fechar</Text>
          </TouchableOpacity>
          <Text style={estilos.textoModal}>Ajustar Economia</Text>
          {/* Adicione aqui os componentes necessários para ajustar a economia */}
          <TouchableOpacity style={estilos.botaoDecretar} onPress={() => setModalEconomiaVisible(false)}>
            <Text style={estilos.textoBotaoDecretar}>Decretar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ImageBackground>
  );
}
