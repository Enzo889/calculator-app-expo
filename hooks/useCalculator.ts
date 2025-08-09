import { useEffect, useRef, useState } from "react";

enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "X",
  DIVIDE = "÷",
  EQUALS = "=",
  CLEAR = "C",
  NEGATE = "+/-",
  DELETE = "del",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState(" 0 ");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    //calcular subResultado

    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    //verifica si ya existe el punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }
    }

    //verificar si es otro cero  y no hay punto
    if (numberString === "0" && number.includes(".")) {
      return setNumber(number + numberString);
    }

    //evaluar si es diferente de cero, no hay punto y es el primer numero
    if (numberString !== "0" && !number.includes(".")) {
      return setNumber(numberString);
    }

    //evitar el 0.00000000000

    if (numberString === "0" && !number.includes(".")) {
      return;
    }

    setNumber(number + numberString);
  };

  return {
    //props
    formula,
    number,
    prevNumber,

    //methods
    buildNumber,
  };
};
