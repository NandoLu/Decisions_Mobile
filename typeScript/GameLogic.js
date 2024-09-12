// GameLogic.js
export const initialState = {
  economy: 100, // 100 M
  popularity: 51, // 51%
  year: 1940,
  month: 0, // Janeiro
  turn: 0,
  maxTurns: 48,
  revenue: 0, // Nova variável de receita
};

export const advanceTurn = (state) => {
  let { year, month, turn, maxTurns, popularity, revenue, economy } = state;

  console.log('State before advancing turn:', state);

  month += 1;
  if (month > 11) {
    month = 0;
    year += 1;
  }

  turn += 1;

  // Atualizar economia com a receita
  economy += revenue;

  console.log('Economy after adding revenue:', economy);

  if (turn >= maxTurns) {
    if (popularity > 50) {
      maxTurns += 48; // Ganhou a eleição
    } else {
      return { ...state, gameOver: true }; // Perdeu a eleição
    }
  }

  return { ...state, year, month, turn, maxTurns, economy, revenue}; // Resetar receita após atualizar economia
};