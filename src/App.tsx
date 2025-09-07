import { useState } from "react";
import { riddles } from "./riddles";

function App() {
  const [riddleNumber, setRiddleNumber] = useState(0);
  const [goodCount, setGoodCount] = useState(0);
  const [showCorrect, setShowCorrect] = useState<null | boolean>(null);

  const riddle = riddles.at(riddleNumber);

  if (!riddle) {
    return (
      <div className="bg-indigo-900 w-screen h-screen flex flex-col items-center justify-center text-white text-center">
        <div className="text-4xl">
          <div className="text-9xl">KONIEC</div>
          <div className="h-[50vh] mt-8 w-[80vh] rounded-3xl bg-gray-300 flex items-center justify-center text-black font-bold">
            Twoj wynik to {goodCount} / {riddles.length}
          </div>
          <div className="mt-4 flex gap-4 items-center justify-center">
            <button
              className="bg-amber-600 text-black font-bold px-4 py-4 rounded-lg hover:bg-blue-600 transition"
              onClick={() => {
                setRiddleNumber(0);
                setGoodCount(0);
              }}
            >
              Zagraj ponownie
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-indigo-900 w-screen h-screen flex flex-col items-center justify-center text-white text-center">
      <div className="text-4xl">
        <div>
          <div className="text-5xl">ZAGADKA {riddleNumber + 1} / {riddles.length}</div>
          <div className="text-2xl mt-2">
            Poprawne odpowiedzi: {goodCount} / {riddleNumber}
          </div>
        </div>
        <div className="h-[50vh] mt-8 w-[80vh] rounded-3xl bg-yellow-100 flex items-center justify-center text-gray-800 text-6xl font-bold">
          <div>{riddle?.question}</div>
        </div>
        <div className="mt-4 flex gap-4 items-center justify-center">
          {riddle?.answers.map((it) => (
            <button
              key={it.text}
              className="bg-amber-600 text-black font-bold px-4 py-4 rounded-lg hover:bg-blue-600 transition"
              onClick={() => {
                setShowCorrect(it.isCorrect);
              }}
            >
              {it.text}
            </button>
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90vw] h-[90vh] bg-green-500 items-center justify-center transition-opacity rounded-4xl" style={{
          opacity: showCorrect === true ? 1 : 0,
          pointerEvents: showCorrect === true ?  'auto' : 'none',
        }} >
          <div className="font-black text-amber-100 mb-6 text-9xl">DOBRZE</div>
          <button
            className="bg-green-900 text-white font-bold px-4 py-4 rounded-lg hover:bg-amber-700 transition"
            onClick={() => {
              setRiddleNumber((n) => n + 1);
              setGoodCount((c) => c + 1);
              setShowCorrect(null);
            }}
          >
            DALEJ
          </button>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90vw] h-[90vh] bg-red-300 items-center justify-center transition-opacity rounded-4xl" style={{
          opacity: showCorrect === false ? 1 : 0,
          pointerEvents: showCorrect === false ? 'auto' : 'none',
        }} >
          <div className="font-black text-rose-800 mb-6 text-9xl">ŹLE</div>
          <button
            className="bg-white text-black font-bold px-4 py-4 rounded-lg hover:bg-amber-700 transition"
            onClick={() => {
              setRiddleNumber((n) => n + 1);
              setShowCorrect(null);
            }}
          >
            DALEJ
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
