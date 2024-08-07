import { infoList } from "./listInfo.js"

let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0

const newNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let lista = [];

const checkNumber = (num, list) => {
    if (list.includes(num)) {
        return checkNumber(newNumber(0, infoList.length - 1), list);
    }
    list.push(num);
    return num;
};

num1 = checkNumber(newNumber(0,infoList.length - 1), lista)
num2 = checkNumber(newNumber(0,infoList.length - 1), lista)
num3 = checkNumber(newNumber(0,infoList.length - 1), lista)
num4 = checkNumber(newNumber(0,infoList.length - 1), lista)
num5 = checkNumber(newNumber(0,infoList.length - 1), lista)


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
            title: infoList[num3].name,
            options: [
                { res: infoList[num3].op1, distance: 2700 },
                { res: infoList[num3].op2, distance: 2750 },
                { res: infoList[num3].op3, distance: 2800 },
                { res: infoList[num3].op4, distance: 2850 },
            ],
            result: infoList[num3].correct
        },

        positionX: 1900,
        positionY: 2600
    },

    {
        questionInfo: {
            title: infoList[num4].name,
            options: [
                { res: infoList[num4].op1, distance: 1600 },
                { res: infoList[num4].op2, distance: 1650 },
                { res: infoList[num4].op3, distance: 1700 },
                { res: infoList[num4].op4, distance: 1750 },
            ],
            result: infoList[num4].correct
        },

        positionX: 2400,
        positionY: 1500
    },

    {
        questionInfo: {
            title: infoList[num5].name,
            options: [
                { res: infoList[num5].op1, distance: 700 },
                { res: infoList[num5].op2, distance: 750 },
                { res: infoList[num5].op3, distance: 800 },
                { res: infoList[num5].op4, distance: 850 },
            ],
            result: infoList[num5].correct
        },

        positionX: 3100,
        positionY: 600
    }
]