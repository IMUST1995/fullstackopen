import { useState } from 'react'

const Button = ({ text, handleClick }) =><button onClick={handleClick}>{text}</button>
const Tr = ({ text, number }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{number}</td>
      </tr>
    </>
  )
}
const H1 = ({ text }) => <h1>{text}</h1>

const StatisticLine = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good + neutral + bad) / 3
  const positive = (good / (good + neutral + bad)) * 100
  
  if(good || neutral || bad) {
    return (
      <>
        <table>
          <tbody>
            <Tr text={'Good:'} number={good} />
            <Tr text={'Neutral:'} number={neutral} />
            <Tr text={'Bad:'} number={bad} />
            <Tr text={'All:'} number={total} />
            <Tr text={'Average:'} number={average.toFixed(2)} />
            <Tr text={'Positive:'} number={`${positive.toFixed(2)}`} />
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <>
        <table>
          <tbody>
            <Tr text={'No Feedback Given!'}/>
          </tbody>
        </table>
      </>
    )
  }
  
}
const Buttons = (props) => {
  return (
    <>
      <Button handleClick={props.handleClick[0]} text={'good'}/>
      <Button handleClick={props.handleClick[1]} text='neutral'/>
      <Button handleClick={props.handleClick[2]} text={'bad'}/>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <H1 text={'Give Feedback'}/>
      <Buttons handleClick={[ handleClickGood, handleClickNeutral, handleClickBad]} />
      <H1 text={'Statistics'}/>
      <StatisticLine good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
