import { infoList } from "./listInfo.js"

let num1 = 0
let num2 = 0
const newNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let lista = [];

const checkNumber = (num, list) => {
    if (list.includes(num)) {
        return checkNumber(newNumber(0, 2), list);
    }
    list.push(num);
    return num;
};

num1 = checkNumber(newNumber(0,2), lista)
num2 = checkNumber(newNumber(0,2), lista)

export const questionList = [
    {
        questionInfo: {
            title: infoList[num1].name,
            options: [
                { res: infoList[num1].op1, distance: 4700 },
                { res: infoList[num1].op2, distance: 4750 },
                { res: infoList[num1].op3, distance: 4800 },
                { res: infoList[num1].op4, distance: 4850 },
            ],
            result: infoList[num1].correct
        },

        positionX: 800,
        positionY: 4600
    },

    {
        questionInfo: {
            title: infoList[num2].name,
            options: [
                { res: infoList[num2].op1, distance: 3700 },
                { res: infoList[num2].op2, distance: 3750 },
                { res: infoList[num2].op3, distance: 3800 },
                { res: infoList[num2].op4, distance: 3850 },
            ],
            result: infoList[num2].correct
        },

        positionX: 1400,
        positionY: 3600
    },

    {
        questionInfo: {
            title: "Formula general de una función exponencial",
            options: [
                { res: "f(x) = (a)x", distance: 2700 },
                { res: "f(a) = (2)3", distance: 2750 },
                { res: "f = raiz de 2", distance: 2800 },
                { res: "f = (0,1)(0,3)", distance: 2850 },
            ],
            result: "f(x) = (a)x"
        },

        positionX: 1900,
        positionY: 2600
    },

    {
        questionInfo: {
            title: "La función exponencial es decreciente cuando",
            options: [
                { res: "0 > a > 1", distance: 1600 },
                { res: "0 > a < 1", distance: 1650 },
                { res: "0 < a < 1", distance: 1700 },
                { res: "0 < a > 1", distance: 1750 },
            ],
            result: "0 < a < 1"
        },

        positionX: 2400,
        positionY: 1500
    },

    {
        questionInfo: {
            title: "Encuentra la solución a la siguiente ecuación: (1/9)x = 81",
            options: [
                { res: "x = 9", distance: 700 },
                { res: "x = -2", distance: 750 },
                { res: "x = 2", distance: 800 },
                { res: "x = -(2/3)", distance: 850 },
            ],
            result: "x = -2"
        },

        positionX: 3100,
        positionY: 600
    }
]