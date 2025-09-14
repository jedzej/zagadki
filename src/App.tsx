import React, { useState } from "react";
import { riddles as allRiddles } from "./riddles";
import { twMerge } from "tailwind-merge";

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
      <Wrapper>
        <div className="text-xl sm:text-3xl md:text-4xl w-full max-w-md mx-auto">
          <div className="text-4xl sm:text-7xl md:text-8xl font-extrabold break-words drop-shadow-lg font-[Comic Sans MS,Comic Sans,cursive] animate-bounce text-yellow-300">
            GRA W ZAGADKI
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl my-6 sm:my-10 font-semibold text-pink-200">
            Wybierz kategorię
          </div>
          <div className="mt-4 sm:mt-8 flex flex-col gap-4 w-full">
            {Object.keys(allRiddles).map((it) => (
              <button
                key={it}
                className="bg-gradient-to-r from-yellow-400 via-pink-300 to-orange-400 text-black font-bold px-4 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-pink-500 transition-all duration-200 text-base sm:text-lg w-full border-2 border-pink-200"
                onClick={() => setRiddleCategory(it as keyof typeof allRiddles)}
              >
                {it}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }

  const riddle = riddles.at(riddleNumber);

  if (!riddle) {
    return (
      <Wrapper>
        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl mx-auto">
          <div className="text-4xl sm:text-7xl md:text-8xl font-extrabold mb-8 text-center drop-shadow-lg font-[Comic Sans MS,Comic Sans,cursive] text-yellow-300 animate-bounce">
            KONIEC
          </div>
          <div className="w-full max-w-xl mx-auto bg-gray-100 flex items-center justify-center text-black font-bold text-lg sm:text-2xl md:text-3xl py-16 px-4 mb-8 text-center rounded-3xl shadow-2xl border-4 border-pink-200">
            Twój wynik to {goodCount} / {riddles.length}
          </div>
          <button
            className="bg-gradient-to-r from-yellow-400 via-pink-300 to-orange-400 text-black font-bold px-6 py-4 rounded-xl shadow-lg hover:scale-105 hover:bg-pink-500 transition-all duration-200 text-base sm:text-lg mx-auto border-2 border-pink-200"
            onClick={() => {
              setRiddleNumber(0);
              setGoodCount(0);
              setRiddleCategory(null);
            }}
          >
            Zagraj ponownie
          </button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="flex flex-col items-center w-full">
        <div className="text-xl sm:text-3xl md:text-4xl mb-2 font-semibold text-pink-200">
          <div className="text-lg sm:text-2xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">
            ZAGADKA {riddleNumber + 1} / {riddles.length}
          </div>
          <div className="text-base sm:text-lg md:text-2xl mt-2 font-semibold text-pink-200">
            Poprawne odpowiedzi: {goodCount} / {riddleNumber}
          </div>
        </div>
        <div className="mt-4 sm:mt-8 w-full max-w-xl mx-auto bg-yellow-100 flex items-center justify-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-extrabold break-words py-10 px-4 rounded-3xl shadow-2xl border-4 border-pink-200">
          <div>{riddle?.question}</div>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 items-center justify-center w-full">
          {riddle?.answers.map((it) => (
            <button
              key={it.text}
              className="bg-gradient-to-r from-yellow-400 via-pink-300 to-orange-400 text-black font-bold px-10 py-6 rounded-2xl shadow-xl hover:scale-110 hover:bg-pink-500 transition-all duration-200 text-2xl sm:text-3xl border-2 border-pink-200 min-w-[160px] max-w-full"
              onClick={() => {
                setShowCorrect(it.isCorrect);
              }}
            >
              {it.text}
            </button>
          ))}
        </div>
      </div>

      <GoodBadPopup
        show={showCorrect === true}
        variant="good"
        onNext={() => {
          setRiddleNumber((n) => n + 1);
          setGoodCount((c) => c + 1);
          setShowCorrect(null);
        }}
      />
      <GoodBadPopup
        show={showCorrect === false}
        variant="bad"
        onNext={() => {
          setRiddleNumber((n) => n + 1);
          setShowCorrect(null);
        }}
      />
    </Wrapper>
  );
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={twMerge(
        "min-h-screen w-full flex flex-col items-center justify-center text-white text-center px-2 bg-gradient-to-br from-indigo-700 via-purple-500 to-pink-400"
      )}
    >
      {children}
    </div>
  );
};

const GoodBadPopup: React.FC<{
  show?: boolean;
  variant: "good" | "bad";
  onNext: () => void;
}> = ({ show, onNext, variant }) => {
  const isGood = variant === "good";
  const cardRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={twMerge(
        "fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center transition-transform z-50",
        isGood
          ? "bg-gradient-to-br from-green-400 via-yellow-300 to-pink-300"
          : "bg-gradient-to-br from-red-400 via-pink-300 to-yellow-200",
        show ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div
        className={twMerge(
          "font-extrabold mb-6 text-5xl sm:text-7xl md:text-9xl drop-shadow-lg animate-bounce font-[Comic Sans MS,Comic Sans,cursive]",
          isGood ? "text-amber-100" : "text-rose-800"
        )}
      >
        {isGood ? "DOBRZE" : "ŹLE"}
      </div>
      <button
        className={twMerge(
          "text-black font-bold px-8 py-5 rounded-2xl shadow-xl hover:scale-110 transition-all duration-200 text-lg border-2",
          isGood
            ? "bg-gradient-to-r from-green-500 via-yellow-300 to-pink-400 hover:bg-pink-500 border-yellow-300"
            : "bg-gradient-to-r from-red-400 via-pink-300 to-yellow-200 hover:bg-yellow-300 border-pink-300"
        )}
        onClick={onNext}
      >
        DALEJ
      </button>
    </div>
  );
};

export default App;
