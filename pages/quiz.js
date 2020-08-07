import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, {useState, useEffect } from 'react'
import Anime from 'react-anime'
import Link from 'next/link'
import { randomData as data} from '../components/quiz/quiz-data'


export default function Quiz() {
    const [answers, setAnswers] = useState(0)
    const [counter, setCounter] = useState(false)
    const [step, setStep] = useState(0)
    const nextStep = () => {
        setCounter(false)
        setStep(step + 1)
    }
    const getAnswer = (e) => {
        if(data[step].correct == e.target.innerText) {
            if(!counter) {
                setAnswers(answers + 1)
                setCounter(true)
            }
        }
        else {
            if(counter) {
                setAnswers(answers - 1)
                setCounter(false)
            }
        }
    }
    // console.log(data)

  return (
    <main className="quiz">
        <div className="questions" style={step<7?{display: "flex"} : {display: "none"}}>
        {
            data.map((e, i) => {
                return (
                    <div key={i} style={i==step?{display: "block"} : {display: "none"}} className="quiz-block">
                        {e.question}
                        <div className="quiz-items"> 
                        {
                            e.answers.map((e,i) => {
                                return (
                                    <div key={i} className="quiz-item" onClick={getAnswer}>{e}</div> 
                                )
                            })
                        }
                        </div>
                    <button onClick={nextStep}>next</button>
                    </div>
                )
            })
        }
        </div>
        <div className="quiz-finish" style={step==7?{display: "block"} : {display: "none"}}>
            {answers}
        </div>
    </main>
  )
}
