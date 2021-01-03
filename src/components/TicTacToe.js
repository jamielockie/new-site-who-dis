import React, { useState, useEffect } from "react";
import * as _ from "lodash";

import { motion } from "framer-motion";
import { winningCombos, initialBoard, boardNames } from "../constants";

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(undefined);
  const [winningSequence, setWinningSequence] = useState(undefined);

  const BoardAnimation = {
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: {
        scale: 0,
        transition: {
          when: "afterChildren",
        },
      },
      visible: {
        scale: 1,
        transition: {
          when: "beforeChildren",
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          staggerChildren: 0.1,
        },
      },
    },
  };

  const getSquaresForPlayer = (board, player) => {
    return _.filter(
      _.map(board, (value, index) => {
        if (value === player) {
          return index;
        }
      }),
      (a) => a !== undefined
    );
  };

  /** We happen to know that the best opening move for the second player is:
   *  the center, if available.
   *  if not, a corner
   *  */
  const hotOutTheGate = (board, remainingSquares) => {
    if (_.size(remainingSquares) === 8) {
      if (!board[4]) {
        return 4;
      }
      return 2;
    }
    return undefined;
  };

  const getOffensiveSquareToPlay = (winningTriad, playerSquares) =>
    _.first(
      _.filter(
        _.difference(winningTriad, playerSquares),
        (chosenSquare) => !_.includes(playerSquares, chosenSquare)
      )
    );

  const getDefensiveSquareToPlay = (winningTriad, playerSquares) =>
    _.first(
      _.filter(
        _.difference(winningTriad, playerSquares),
        (chosenSquare) => !_.includes(playerSquares, chosenSquare)
      )
    );

  /** Find a move that is the only one remaining from a winning sequence */
  const killerInstinct = (board, remainingSquares) => {
    const goodGuySquares = getSquaresForPlayer(board, "O");
    let ourMove;
    _.map(winningCombos, (winningTriad) => {
      if (_.size(_.intersection(winningTriad, goodGuySquares)) === 2) {
        const squareToPlay = getOffensiveSquareToPlay(
          winningTriad,
          goodGuySquares
        );
        if (_.includes(remainingSquares, squareToPlay)) {
          ourMove = squareToPlay;
        }
      }
    });
    return ourMove;
  };

  /** Find a move that would put this player one move away from a winning sequence */
  const strongPlay = (board, remainingSquares) => {
    const goodGuySquares = getSquaresForPlayer(board, "O");
    let ourMove;
    _.map(winningCombos, (winningTriad) => {
      if (_.size(_.intersection(winningTriad, goodGuySquares)) === 1) {
        const squareToPlay = getOffensiveSquareToPlay(
          winningTriad,
          goodGuySquares
        );
        if (_.includes(remainingSquares, squareToPlay)) {
          ourMove = squareToPlay;
        }
      }
    });
    return ourMove;
  };

  /** Find a move that blocks the other player from a winning sequence */
  const closeCall = (board, remainingSquares) => {
    const badGuySquares = getSquaresForPlayer(board, "X");
    let ourMove;
    _.map(winningCombos, (winningTriad) => {
      if (_.size(_.intersection(winningTriad, badGuySquares)) === 2) {
        const squareToPlay = getDefensiveSquareToPlay(
          winningTriad,
          badGuySquares
        );
        if (_.includes(remainingSquares, squareToPlay)) {
          ourMove = squareToPlay;
        }
      }
    });
    return ourMove;
  };

  const getWinnerCopy = (winner) => {
    switch (winner) {
      case "X":
        return "Well Played!";
      case "O":
        return "Nice Try... Come on, don't go easy on me!";
      case "Cat":
        return "Cat's game 😽 (it's a tie)";
      default:
        return "Game in Progress";
    }
  };

  /** Check for Winner */
  useEffect(() => {
    const winnerGagnon = (indexes) => {
      if (indexes.length < 3) {
        return false;
      }

      const result = _.map(winningCombos, (winningTriad) => {
        if (
          _.every(
            winningTriad,
            (number) => _.includes(indexes, number) && !winningSequence
          )
        ) {
          setWinningSequence(winningTriad);
          return true;
        }
        return false;
      });

      return _.some(result, (winner) => winner);
    };

    const badGuySquares = getSquaresForPlayer(board, "X");
    const goodGuySquares = getSquaresForPlayer(board, "O");

    const goodGuysWon = winnerGagnon(goodGuySquares);
    const badGuysWon = winnerGagnon(badGuySquares);

    if (goodGuysWon) {
      setWinner("O");
    }

    if (badGuysWon) {
      setWinner("X");
    }

    if (
      !goodGuysWon &&
      !badGuysWon &&
      _.size(_.filter(board, (v) => v)) === 9
    ) {
      setWinner("Cat");
    }
  }, [board, winningCombos, winningSequence]);

  return (
    <div className="pt-10 sm:pt-30">
      <h1 className="font-bold mb-1 p-3 pl-0 pr-10 sm:text-4xl text-2xl text-gray-900  ">
        Up for a game of {` `}
        <strong className="text-primaryText whitespace-no-wrap font-semibold">
          Tic Tac Toe
        </strong>
        ?
      </h1>
      <h2 className="inline text-1xl sm:text-2xl font-semibold tracking-normal leading-snug text-gray-900 mb-4">
        This game board is controlled entirely by{" "}
        <s className="text-primary">
          <span className="text-gray-900">artificial intelligence</span>
        </s>{" "}
        JavaScript functions!{" "}
      </h2>
      <div className="flex flex-col justify-center items-center mb-12">
        <button
          className="bg-primaryDark mb-4 hover:bg-primary text-white font-bold mt-6 py-2 px-4 rounded tracking-widest"
          onClick={() => {
            setBoard(initialBoard);
            setWinner(undefined);
            setWinningSequence(undefined);
          }}
        >
          Reset
        </button>
        <motion.span
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 3,
            type: "spring",
          }}
          initial={{ y: -100, opacity: 0 }}
          className="inline-block text-1xl sm:text-2xl font-semibold tracking-normal leading-snug text-gray-900 mb-2"
        >
          {winner ? getWinnerCopy(winner) : "Go ahead — It's your move"}
        </motion.span>
        <div className=" p-4 sm:p-4 md:p-12 lg:p-16  bg-gray-300 border-dashed border-gray-400 border-2 rounded-lg ">
          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 -mr-px">
            <motion.div {...BoardAnimation} className="board-wrapper">
              {_.map(board, (value, index) => {
                const hasSquareBeenPlayed = !!board[index];
                const isSquareAWinningMove =
                  _.includes(winningSequence || [], index) || winner === "Cat";
                // const isSquareAWinningMove = true;
                return (
                  <motion.button
                    className={`square ${
                      hasSquareBeenPlayed || winner ? "pointer-events-none" : ""
                    }`}
                    key={index}
                    variants={{
                      hidden: { scale: 0, rotate: 45 },
                      visible: { scale: 1, rotate: 0 },
                    }}
                    aria-label={boardNames[index]}
                    /** To disable click while keeping read option for a11y*/
                    readOnly={hasSquareBeenPlayed || winner}
                    /** The move handler */
                    onClick={() => {
                      if (hasSquareBeenPlayed) {
                        return;
                      }

                      /** User Move */
                      let theirTurnBoard = [...board];
                      theirTurnBoard[index] = "X";
                      setBoard(theirTurnBoard);

                      /** Our Move (🤖) */
                      let ourTurnBoard = [...theirTurnBoard];
                      const remainingSquares = _.filter(
                        _.map(ourTurnBoard, (value, index) => !value && index),
                        (value) => {
                          return value !== false;
                        }
                      );

                      const openingMove = hotOutTheGate(
                        ourTurnBoard,
                        remainingSquares
                      );

                      if (_.isNumber(openingMove)) {
                        ourTurnBoard[openingMove] = "O";
                        _.delay(() => setBoard(ourTurnBoard), 250);
                        return;
                      }

                      const winningMove = killerInstinct(
                        ourTurnBoard,
                        remainingSquares
                      );

                      if (_.isNumber(winningMove)) {
                        ourTurnBoard[winningMove] = "O";
                        _.delay(() => setBoard(ourTurnBoard), 250);
                        return;
                      }

                      const defensiveMove = closeCall(
                        ourTurnBoard,
                        remainingSquares
                      );

                      if (_.isNumber(defensiveMove)) {
                        ourTurnBoard[defensiveMove] = "O";
                        _.delay(() => setBoard(ourTurnBoard), 250);
                        return;
                      }

                      const strongMove = strongPlay(
                        ourTurnBoard,
                        remainingSquares
                      );

                      if (_.isNumber(strongMove)) {
                        ourTurnBoard[strongMove] = "O";
                        _.delay(() => setBoard(ourTurnBoard), 250);
                        return;
                      }

                      const randomSquare =
                        remainingSquares[
                          Math.floor(Math.random() * remainingSquares.length)
                        ];
                      ourTurnBoard[randomSquare] = "O";
                      _.delay(() => setBoard(ourTurnBoard), 250);
                      return;
                    }}
                  >
                    <span
                      className={`move ${
                        hasSquareBeenPlayed ? "opacity-100" : "opacity-0"
                      } ${
                        isSquareAWinningMove
                          ? "text-shadow-orange"
                          : "text-shadow-white"
                      }`}
                    >
                      {board[index]}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>
        <p
          className={`inline text-2xl mt-1 font-normal tracking-wide leading-snug pb-4 text-gray-900
            ${winner ? "opacity-100" : "opacity-0"}`}
        >
          {}
        </p>
      </div>
    </div>
  );
}
