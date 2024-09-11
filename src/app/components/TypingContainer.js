import { useEffect } from "react";
import useGame from "../hooks/useGame";
import { GlobalContext } from "../GlobalContext";



const TypingContainer = () => {
  const {
    userInput,
    currentIndex,
    isComplete,
    wordsWithSpaces,
    handleKeyDown,
  } = useTypingContext();

    const { game } = useContext(GlobalContext);
    const { opponentProgress, playerProgress, gameState , countdown , winner , participants } = game;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="relative content-center h-full max-w-4xl mx-auto">
      {wordsWithSpaces.split("").map((char, index) => (
        <span
          key={index}
          className="relative text-3xl font-medium p-[4px] leading-loose"
        >
          <span
            className={
              userInput[index] === char ? "text-[#4dc7e2]" : "text-[#727272]"
            }
          >
            {char}
          </span>
          {index === currentIndex && !isComplete && (
            <span className="absolute w-0.5 h-9 bg-[#4dc7e2] left-0 bottom-1 animate-blink"></span>
          )}
          {index === opponentProgress && (
            <span className="absolute w-3 h-0.5 bg-[#FF6347] left-1 bottom-1"></span>
          )}
        </span>
      ))}
    </div>
  );
};

export default TypingContainer;
