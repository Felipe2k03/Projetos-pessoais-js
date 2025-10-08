const words = [
  { word: "Abacaxi", clue: "Fruta tropical" },
  { word: "Banana", clue: "Fruta favorita do macaco" },
  { word: "Morango", clue: "Fruta Vermelha" },
  { word: "Abacate", clue: "Usado na Guacamole" },
  { word: "Tamarindo", clue: "Usado no Suco do chaves" },
  { word: "Cachorro", clue: "Melhor amigo do Homem" },
  { word: "Calopsita", clue: "passaro que assobia" },
  { word: "Gato", clue: " animal peludo de belos olhos" },
  { word: "Elefante", clue: "Animal cinza de longa tromba" },
  { word: "Golfinho", clue: "Animal marinho super inteligente" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length); //aproximadamente 10% de chance de cada palavra ser sorteada.
  return words[index];
}
