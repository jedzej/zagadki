export const riddles = [
  {
    question: "Co ma dwie nogi?",
    answers: [
      { text: "Człowiek", isCorrect: true },
      { text: "Kot", isCorrect: false },
      { text: "Taboret", isCorrect: false },
    ],
  },
  {
    question: "Co ma rogi?",
    answers: [
      { text: "Szczeniak", isCorrect: false },
      { text: "Kozioł", isCorrect: true },
      { text: "Kret", isCorrect: false },
    ],
  },
  {
    question: "Ile to 2+2?",
    answers: [
      { text: "Dwa", isCorrect: false },
      { text: "Osiem", isCorrect: false },
      { text: "Cztery", isCorrect: true },
      { text: "Szesnaście", isCorrect: false },
    ],
  },
  {
    question: "Co robi złodziej?",
    answers: [
      { text: "Daje buziaczki", isCorrect: false },
      { text: "Kradnie", isCorrect: true },
      { text: "Pomaga dzieciom", isCorrect: false },
    ],
  },
  {
    question: "Co jest obrzydliwe?",
    answers: [
      { text: "Czystość", isCorrect: false },
      { text: "Brud", isCorrect: true },
      { text: "Porządek", isCorrect: false },
      { text: "Ład", isCorrect: false },
    ],
  },
  {
    question: "Kiedy idziemy do przedszkola?",
    answers: [
      { text: "Wieczorem", isCorrect: false },
      { text: "Po południu", isCorrect: false },
      { text: "Rano", isCorrect: true },
      { text: "W nocy", isCorrect: false },
    ],
  },
  {
    question: "Co jest największe?",
    answers: [
      { text: "Kiełbasa", isCorrect: false },
      { text: "Planeta", isCorrect: true },
      { text: "But", isCorrect: false },
      { text: "Ołówek", isCorrect: false },
    ],
  },
  {
    question: "Co pije koń?",
    answers: [
      { text: "Sok", isCorrect: false },
      { text: "Wodę", isCorrect: true },
      { text: "Mleko", isCorrect: false },
      { text: "Herbatę", isCorrect: false },
    ],
  },
  {
    question: "Co jest najszybsze?",
    answers: [
      { text: "Samochód", isCorrect: false },
      { text: "Pociąg", isCorrect: false },
      { text: "Samolot", isCorrect: true },
      { text: "Rower", isCorrect: false },
    ],
  },
  {
    question: "Kiedy pada śnieg?",
    answers: [
      { text: "Latem", isCorrect: false },
      { text: "Wiosną", isCorrect: false },
      { text: "Jesienią", isCorrect: false },
      { text: "Zimą", isCorrect: true },
    ],
  },
  {
    question: "Ile to 3x3?",
    answers: [
      { text: "Sześć", isCorrect: false },
      { text: "Siedem", isCorrect: false },
      { text: "Osiem", isCorrect: false },
      { text: "Dziewięć", isCorrect: true },
    ],
  },
  {
    question: "Gdzie jest najwięcej kamieni?",
    answers: [
      { text: "W bucie", isCorrect: false },
      { text: "W rzece", isCorrect: true },
      { text: "W kiełbasie", isCorrect: false },
      { text: "W górach", isCorrect: false },
    ],
  },
  {
    question: "Jaka jest stolica Polski?",
    answers: [
      { text: "Kraków", isCorrect: false },
      { text: "Warszawa", isCorrect: true },
      { text: "Wrocław", isCorrect: false },
      { text: "Gdańsk", isCorrect: false },
    ],
  },
] satisfies {
  question: string;
  answers: { text: string; isCorrect: boolean }[];
}[];
