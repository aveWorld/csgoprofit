const data = [
    {
        question: "Why stickers from Katowice 2014 are so expensive?",
        answers: ["they are beutiful", "they are limited", "they are old", "gaben likes them"],
        correct: "they are limited"
    },
    {
        question: "In which major did the first gold stickers appear?",
        answers: ["PGL Krakow 2017", "ESL One Cologne 2016", "ELEAGUE Boston 2018", "ESL One Katowice 2015"],
        correct: "PGL Krakow 2017"
    },
    {
        question: "Witch operation in CS:GO was the first?",
        answers: ["Operation Bravo", "Operation Breakout", "Operation Phoenix", "Operation Payback"],
        correct: "Operation Payback"
    },
    {
        question: "The most expensive case in CS:GO",
        answers: ["Operation Bravo Case", "CS:GO Weapon Case", "Operation Hydra Case", "Shattered Web Case"],
        correct: "Operation Bravo Case"
    },
    {
        question: "Does each knife have a pattern?",
        answers: ["Yes", "No", "Not really", "Don't know"],
        correct: "No"
    },
    {
        question: "What is float mean?",
        answers: ["pattern", "skin worn", "type of skin", "It's mean how cool skin is"],
        correct: "skin worn"
    },
    {
        question: "What's the cheapest knife in CS:GO",
        answers: ["Navaja Knife | Safari Mesh", "Navaja Knife | Night Stripe", "Navaja Knife | Urban Masked", "Shadow Daggers | Rust Coat"],
        correct: "Navaja Knife | Safari Mesh"
    }
]

const randomizeData = (data) => {
    const oldData = [...data]
    const newData = [];
    while(oldData.length) {
        let randomIndex = parseInt(Math.random() * oldData.length)
        newData.push(oldData[randomIndex])
        oldData.splice(randomIndex,1)
    }
    return newData
  }

const randomData = randomizeData(data);

export {randomData}