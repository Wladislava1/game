import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { routes } from "../api/routes";
import { CoinsContext } from './MoneyContext.js';

const TicTac = ({ onReset, currentShow }) => {
    const [figure, setFigure] = useState(0);
    const [board, setBoard] = useState(Array(9).fill(0));
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [winner, setWinner] = useState(0);
    const { setCoins } = useContext(CoinsContext);

    const getMoneyWin = async () => {
        if (winner === figure) {
            try {
              const username = localStorage.getItem('username');
              console.log(username);
              const response = await axios.post(routes.money(), { username: username, money: 10 });
              setCoins(response.data.money)
            } catch (error) {
              console.log(error.response.data.message)
            }
        }
    }
    const winningLines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    const checkWinner = (board, figure) => {
        for (let line of winningLines) {
            const [a, b, c] = line;
            if (
                board[a] === figure &&
                board[a] === board[b] &&
                board[b] === board[c] 
            ) {
                return true;
            }
        }
        return false;
    };

    const isBoardFull = (board) => {
        return board.every(cell => cell !== 0);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(0));
        setWinner(0);
        setIsPlayerTurn(true);
        setFigure(0);
    };

    const findCriticalMove = (board, player) => {
        for (let line of winningLines) {
            const [a,b,c] = line;
            const lineValues = [board[a], board[b], board[c]];
            const countPlayer = lineValues.filter(v => v === player).length;
            const countEmpty = lineValues.filter(v => v === 0).length;

            if (countPlayer === 2 && countEmpty === 1) {
                return line.find(i => board[i] === 0);
            }
        }
        return null;
    }

    const randomPosition = () => {
        setBoard(prevBoard => {
            const newBoard = [...prevBoard];
            const opponent = figure === 1 ? 2 : 1;

            let move = findCriticalMove(newBoard, opponent);
            if (move !== null) {
                newBoard[move] = opponent;
                return newBoard;
            }

            move = findCriticalMove(newBoard, figure);
            if (move !== null) {
                newBoard[move] = opponent;
                return newBoard;
            }

            const emptyIndices = newBoard
                .map((cell, idx) => (cell === 0 ? idx : null))
                .filter(idx => idx !== null);

            if (emptyIndices.length === 0) return newBoard;

            const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            newBoard[randomIndex] = opponent;

            if (checkWinner(newBoard, opponent)) {
                setWinner(opponent);
            }
            return newBoard;
        });
        setIsPlayerTurn(true);
    };

    const handleCellClick = (index) => {
        if (figure === 0 || !isPlayerTurn || winner) return;
        if (board[index] !== 0) return;

        setBoard(prevBoard => {
            const newBoard = [...prevBoard];
            newBoard[index] = figure;

            if (checkWinner(newBoard, figure)) {
                setWinner(figure);
            }

            return newBoard;
        });
        setIsPlayerTurn(false);
    };

    useEffect(() => {
        if (onReset) {
            onReset.current = resetGame;
        }
    }, [onReset]);

    useEffect(() => {
        if (!isPlayerTurn && figure !== 0 && !winner) {
            const timer = setTimeout(() => {
                randomPosition();
            }, 500);
            return () => clearTimeout(timer);
        }
        if (winner) {
            if (winner === figure) {
                getMoneyWin();
            }
            const timer = setTimeout(() => {
                resetGame();
            }, 500);
            return () => clearTimeout(timer);
        } else if (isBoardFull(board)) {
            const timer = setTimeout(() => {
                resetGame();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isPlayerTurn, figure, winner]);

    useEffect(() => {
        if (figure !== 0) {
            const opponent = figure === 1 ? 2 : 1;
            if (checkWinner(board, opponent)) {
                setWinner(opponent);
            }
        }
    }, [board, figure]);

    const handleСhoiceFigure = (index) => {
        setFigure(index)
    };

    const renderFigure = (cell) => {
        if (cell === 1) return <img src="/img/buttons/крестик.png" alt="крестик" className="h-16 w-16" />;
        if (cell === 2) return <img src="/img/buttons/сердечко.png" alt="сердечко" className="h-16 w-16" />;
        return null;
    };

    return (
        <>
            {figure === 0 && currentShow === 1 && (
                <div className="w-100 h-50 absolute bg-white border-4 rounded-3xl flex flex-row">
                    <div 
                        onClick={() => handleСhoiceFigure(1)}
                        className="cursor-pointer flex justify-center items-center flex-1"
                    >
                        <img src="/img/buttons/крестик.png" alt="крестик"/>
                    </div>
                    <div className="w-1 h-full bg-black mx-4"></div>
                    <div
                        onClick={() => handleСhoiceFigure(2)}
                        className="cursor-pointer flex justify-center items-center flex-1"
                    >
                        <img src="/img/buttons/сердечко.png" alt="сердечко"/>
                    </div>
                </div>
            )}
            {figure !== 0 && currentShow === 1 && (
                <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                {board.map((cell, idx) => (
                    <div
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    className={`
                        flex justify-center items-center
                        ${idx % 3 !== 2 ? 'border-r-4' : ''} 
                        ${idx < 6 ? 'border-b-4' : ''}
                        ${idx === 0 ? 'rounded-tl-3xl' : ''}
                        ${idx === 2 ? 'rounded-tr-3xl' : ''}
                        ${idx === 6 ? 'rounded-bl-3xl' : ''}
                        ${idx === 8 ? 'rounded-br-3xl' : ''}
                        cursor-pointer
                    `}
                    style={{ borderColor: 'black' }}
                    >
                    {renderFigure(cell)}
                    </div>
                ))}
                </div>
            )}
        </>
    )
}

export default TicTac;