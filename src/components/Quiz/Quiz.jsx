import { useState } from 'react';

const namesBibl = ['React', 'Vue', 'Express', 'Bootstrap'];
const languages = [
  'JavaScript',
  'Python',
  'HTML',
  'C++',
  'C#',
  'PHP',
  'CSS',
  'TypeScript',
];
const correctAnswers = {
  answ1: 'React',
  answ2: ['CSS', 'JavaScript'],
  answ3: 'CSS'
}

const Quiz = () => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState('');
  const [score, setScore] = useState(null);
  const changeAnswer1 = (event) => {
    setAnswer1(event.target.value);
  };
  const showRadio = (item) => (
    <label key={item}>
      <input
        type="radio"
        name="question1"
        value={item}
        checked={item === answer1}
        onChange={changeAnswer1}
      />
      {item}
    </label>
  );
  const changeAnswer2 = (event) => {
    const value = event.target.value;
    const newArray = answer2.includes(value)
      ? answer2.filter((v) => v !== value)
      : [...answer2, value];
    setAnswer2(newArray);
  };
  const showCheckbox = (item) => (
    <label key={item}>
      <input
        type="checkbox"
        value={item}
        checked={answer2.includes(item)}
        onChange={changeAnswer2}
      />
      {item}
    </label>
  );
  const showOption = (item) => (
    <option key={item} value={item}>
      {item}
    </option>
  );
  const changeAnswer3 = (event) => {
    setAnswer3(event.target.value);
  };
  const checkResult = () => {
    let result = 0;
    if(answer1 === correctAnswers.answ1){result++}
    if(answer3 === correctAnswers.answ3){result++}
    if(answer2.length === correctAnswers.answ2.length && answer2.every((item)=>correctAnswers.answ2.includes(item))){result++}
    setScore(result)
  }
  return (
    <div>
      <fieldset>
        <legend>
          1. Яка бібіліотека використовується для створення інтерфейсів?
        </legend>
        {namesBibl.map(showRadio)}
      </fieldset>
      <fieldset>
        <legend>
          2. Якими мовами можна змінити стилі елементів веб-сторінок?
        </legend>
        {languages.map(showCheckbox)}
      </fieldset>
      <fieldset>
        <legend>3. Яка мова використовується для опису стилів?</legend>
        <select value={answer3} onChange={changeAnswer3}>
          {languages.map(showOption)}
        </select>
      </fieldset>
      <button onClick={checkResult}>Підрахувати результат</button>
      {score!==null && <p>Правильних відповідей: {score}/3</p>}
    </div>
  );
};

export default Quiz;
