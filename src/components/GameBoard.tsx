import React from "react";

const GameBoard: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-700 flex flex-col items-center justify-around p-6">
      <div className="text-white text-2xl font-bold mb-4">🃏 Blackjack Segéd – Játéktábla</div>

      <div className="flex justify-center w-full gap-6">
        <div className="bg-white/10 border border-white rounded-xl w-40 h-28 flex items-center justify-center text-white">
          Osztó helye
        </div>
      </div>

      <div className="flex justify-center w-full gap-6 mt-10">
        {["Játékos 1", "Játékos 2", "Játékos 3"].map((name) => (
          <div
            key={name}
            className="bg-white/10 border border-white rounded-xl w-40 h-28 flex items-center justify-center text-white"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
