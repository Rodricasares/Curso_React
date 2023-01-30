
import{WINNER_COMBOS} from "../constants.js"


export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    //para ver si X u O es la ganadora
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    // si no hay ganador
    return null
  }

  export  const checkEndGame = (newBoard) => {
    //Revisamos si hay un empate
    //Si no hay más espacios vacíos en el tablero

  return newBoard.every((square) => square === null)
  }
