import { useState } from "react";
import { riddles as allRiddles } from "./riddles";

function App() {
  const [riddleCategory, setRiddleCategory] = useState<
    keyof typeof allRiddles | null
  >(null);
  const [riddleNumber, setRiddleNumber] = useState(0);
  const [goodCount, setGoodCount] = useState(0);
  const [showCorrect, setShowCorrect] = useState<null | boolean>(null);
  const riddles = riddleCategory ? allRiddles[riddleCategory] : null;

  if (!riddleCategory || !riddles) {
    return (
      <div className="bg-indigo-900 min-h-screen w-full flex flex-col items-center justify-center text-white text-center px-2">
        <div className="text-xl sm:text-3xl md:text-4xl w-full max-w-md mx-auto">
          <div className="text-3xl sm:text-6xl md:text-8xl font-bold break-words">
            GRA W ZAGADKI
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl my-6 sm:my-10">
            Wybierz kategorię
          </div>
          <div className="mt-4 sm:mt-8 flex flex-col gap-2 sm:gap-4 w-full">
            {Object.keys(allRiddles).map((it) => (
              <button
                key={it}
                className="bg-amber-600 text-black font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-blue-600 transition text-base sm:text-lg w-full"
                onClick={() => setRiddleCategory(it as keyof typeof allRiddles)}
              >
                {it}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const riddle = riddles.at(riddleNumber);

  if (!riddle) {
    return (
      <div className="bg-indigo-900 min-h-screen w-full flex items-center justify-center text-white px-2">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl mx-auto">
          <div className="text-3xl sm:text-6xl md:text-8xl font-bold mb-8 text-center">KONIEC</div>
          <div className="w-full max-w-xl mx-auto bg-gray-300 flex items-center justify-center text-black font-bold text-lg sm:text-2xl md:text-3xl py-16 px-4 mb-8 text-center">
            Twój wynik to {goodCount} / {riddles.length}
          </div>
          <button
            className="bg-amber-600 text-black font-bold px-6 py-4 rounded-lg hover:bg-blue-600 transition text-base sm:text-lg mx-auto"
            onClick={() => {
              setRiddleNumber(0);
              setGoodCount(0);
              setRiddleCategory(null);
            }}
          >
            Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-indigo-900 min-h-screen w-full flex items-center justify-center text-white text-center px-2">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
        <div className="text-xl sm:text-3xl md:text-4xl mb-2">
          <div className="text-lg sm:text-2xl md:text-4xl">
            ZAGADKA {riddleNumber + 1} / {riddles.length}
          </div>
          <div className="text-base sm:text-lg md:text-2xl mt-2">
            Poprawne odpowiedzi: {goodCount} / {riddleNumber}
          </div>
        </div>
        <div className="mt-4 sm:mt-8 w-full max-w-xl mx-auto bg-yellow-100 flex items-center justify-center text-gray-800 text-lg sm:text-2xl md:text-4xl font-bold break-words py-10 px-4 rounded-2xl">
          <div>{riddle?.question}</div>
        </div>
        <div className="mt-8 flex flex-row gap-4 items-center justify-center w-full">
          {riddle?.answers.map((it) => (
            <button
              key={it.text}
              className="bg-amber-600 text-black font-bold px-6 py-4 rounded-lg hover:bg-blue-600 transition text-base sm:text-lg"
              onClick={() => {
                setShowCorrect(it.isCorrect);
              }}
            >
              {it.text}
            </button>
          ))}
        </div>
        <div
          className={`fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center transition-opacity z-50 ${
            showCorrect === true ? "bg-green-500" : ""
          }`}
          style={{
            opacity: showCorrect === true ? 1 : 0,
            pointerEvents: showCorrect === true ? "auto" : "none",
          }}
        >
          <div className="font-black text-amber-100 mb-6 text-3xl sm:text-6xl md:text-8xl">
            DOBRZE
          </div>
          <button
            className="bg-green-900 text-white font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-amber-700 transition text-base sm:text-lg w-full sm:w-auto"
            onClick={() => {
              setRiddleNumber((n) => n + 1);
              setGoodCount((c) => c + 1);
              setShowCorrect(null);
            }}
          >
            DALEJ
          </button>
        </div>

        <div
          className={`fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center transition-opacity z-50 ${
            showCorrect === false ? "bg-red-300" : ""
          }`}
          style={{
            opacity: showCorrect === false ? 1 : 0,
            pointerEvents: showCorrect === false ? "auto" : "none",
          }}
        >
          <div className="font-black text-rose-800 mb-6 text-3xl sm:text-6xl md:text-8xl">
            ŹLE
          </div>
          <button
            className="bg-white text-black font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-amber-700 transition text-base sm:text-lg w-full sm:w-auto"
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
