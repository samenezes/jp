import {React, useState, useEffect} from 'react'
import './provaelements.css'
import { Link } from "react-router-dom";

const attprova = () => {
  const [question, setQuestion] = useState('');
  const [difficulty, setDifficulty] = useState('');


  const fetchQuestion = async () => {
      try {
          const res = await fetch('https://opentdb.com/api.php?amount=30&category=18');
          const data = await res.json();
          const question = data.data.question;

          // Select Random Question and DD
          const randomQt = question[Math.floor(Math.random() * question.length)];

          // Atualiza A questão e dificuldade
          setQuestion(randomQt.question);
      } catch (err) {
          console.log('Ocorreu um erro na requisição', err);
      }
  }

  const fetchDD = async () => {
    try {
        const res = await fetch('https://opentdb.com/api.php?amount=30&category=18');
        const data = await res.json();
        const difficulty = data.data.difficulty;

        // Select Random Question and DD
        const randomDD = difficulty[Math.floor(Math.random() * difficulty.length)];

        // Atualiza A questão e dificuldade
        setDifficulty(randomDD.difficulty);
    } catch (err) {
        console.log('Ocorreu um erro na requisição', err);
    }
}


  // Chame as funções
  useEffect(() => {
      fetchQuestion();
      fetchDD();
  }, []);

  return (
      <>

      <h1 id="titulo">Prova: Questões Api</h1>
          <div className="center-btn">
              <button type="button" id="btn" class="btn btn-outline-light" onClick={() => { fetchQuestion(); fetchDD();}}>Gere Sua Questão</button>
          </div>

          <container className="prova-catch">
              <container className="prova-container">
                  
                  <div id="prova-title">{question}</div>
                  <div id="prova-title">{difficulty}</div>
              </container>
          </container>
          <div className="center-btn1">
              <Link id="btn" to="/">Voltar</Link>
          </div>

          
      </>
  );
}


export default attprova;
