import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 60, // Adiciona espaço para a barra superior fixa
  },
  barraSuperior: {
    width: "100%",
    padding: 10,
    backgroundColor: "#313030",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  textoBarraSuperior: {
    color: "#fff",
    fontSize: 11,
    marginRight: 25,
    marginLeft: 25,
  },
  colunas: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  botaoSetor: {
    flexBasis: "30%",
    padding: 10,
    backgroundColor: "#313030",
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#313030",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: "#fff",
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    padding: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    marginTop: 0,
  },
  itensModal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    width: "70%",
    marginRight: 0,
  },
  colunaModal1: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "column",
    padding: 20,
  },
  colunaModal2: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "column",
    padding: 20,
  },
  botaoFechar: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  textoBotaoFechar: {
    color: "#fff",
    textAlign: "center",
  },
  textoModal: {
    color: "#fff",
    fontSize: 11,
    marginBottom: 6,
  },
  slider: {
    width: "100%",
    height: 30,
    backgroundColor: "#d3d3d3", // Cor de fundo cinza
  },
  botaoDecretar: {
    backgroundColor: "#313030",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  textoBotaoDecretar: {
    color: "#fff",
    textAlign: "center",
  },
});

export default estilos;
