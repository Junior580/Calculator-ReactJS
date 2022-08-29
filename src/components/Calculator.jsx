import style from "./Calculator.module.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useState } from "react";

const Calculator = () => {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    const inputNum = (e) => {
        const input = e.target.value;
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    };

    const clear = () => {
        setNum(0);
    };

    const percentage = () => {
        setNum(num / 100);
    };

    const changeSign = () => {
        if (num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    };

    const calculate = () => {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    };

    const operatorHandler = (e) => {
        const operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    };

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className={style.wrapper}>
                    <Box m={10} />
                    <h1 className={style.result}>{num}</h1>
                    <Box m={5} />
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button
                        className={style.orange}
                        onClick={operatorHandler}
                        value="/"
                    >
                        /
                    </button>
                    <button className={style.grey} onClick={inputNum} value={7}>
                        7
                    </button>
                    <button className={style.grey} onClick={inputNum} value={8}>
                        8
                    </button>
                    <button className={style.grey} onClick={inputNum} value={9}>
                        9
                    </button>
                    <button
                        className={style.orange}
                        onClick={operatorHandler}
                        value="X"
                    >
                        X
                    </button>
                    <button className={style.grey} onClick={inputNum} value={4}>
                        4
                    </button>
                    <button className={style.grey} onClick={inputNum} value={5}>
                        5
                    </button>
                    <button className={style.grey} onClick={inputNum} value={6}>
                        6
                    </button>
                    <button
                        className={style.orange}
                        onClick={operatorHandler}
                        value="-"
                    >
                        -
                    </button>
                    <button className={style.grey} onClick={inputNum} value={1}>
                        1
                    </button>
                    <button className={style.grey} onClick={inputNum} value={2}>
                        2
                    </button>
                    <button className={style.grey} onClick={inputNum} value={3}>
                        3
                    </button>
                    <button
                        className={style.orange}
                        onClick={operatorHandler}
                        value="+"
                    >
                        +
                    </button>
                    <button className={style.grey} onClick={inputNum} value={0}>
                        0
                    </button>
                    <button
                        className={style.grey}
                        onClick={inputNum}
                        value={"."}
                    >
                        ,
                    </button>
                    <button
                        className={style.grey}
                        style={{ visibility: "hidden" }}
                    >
                        ,
                    </button>
                    <button className={style.orange} onClick={calculate}>
                        =
                    </button>
                </div>
            </Container>
        </div>
    );
};
export default Calculator;
