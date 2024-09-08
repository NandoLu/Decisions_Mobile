import { Alert } from "react-native";

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const calcularValores = (impostos, impostoRenda, economia, setEconomia, renda, setRenda, gastos, setGastos, popularidade, setPopularidade) => {
  let economia;
  let popularidade;
  let renda;
  let gastos;
  // let novaPopularidade = popularidade;
  // novaPopularidade = Math.max(0, Math.min(100, novaPopularidade)); // Limita a popularidade entre 0 e 100
  

  setRenda(novaRenda);
  setGastos(novosGastos);
  setPopularidade(novaPopularidade);
  setEconomia(novaEconomia);
};

const decretaMudanca = (impostos, impostoRenda, economia, setEconomia, renda, setRenda, gastos, setGastos, popularidade, setPopularidade, poder, setPoder) => {
  let custo = Math.abs(impostos - impostoRenda);
  if (poder < custo) {
    Alert.alert("Atenção", "Você não tem poder suficiente para fazer essa mudança.");
    return;
  }
  setPoder(poder - custo);
  calcularValores(impostos, impostoRenda, economia, setEconomia, renda, setRenda, gastos, setGastos, popularidade, setPopularidade);
};

const pularTurno = (economia, setEconomia, renda, setRenda, gastos, setGastos, popularidade, setPopularidade, poder, setPoder, ano, setAno, mes, setMes) => {
  setPoder(poder + 0.5);
  setMes((mes + 1) % 12);
  if (mes === 11) {
    setAno(ano + 1);
    if (ano % 4 === 3 && popularidade < 50) {
      Alert.alert("Fim de Jogo", "Sua popularidade caiu abaixo de 50%. O jogo acabou.");
      // Reiniciar o jogo ou mostrar uma tela de encerramento
    } else if (ano % 4 === 3 && popularidade >= 50) {
      Alert.alert("Parabéns", "Sua popularidade está acima de 50%. Você ganhou mais 4 anos de mandato.");
    }
  }
};

export default {
  calcularValores,
  decretaMudanca,
  pularTurno,
};
