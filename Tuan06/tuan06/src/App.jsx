import { useEffect, useReducer, useRef, useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "+": return {...state, count: state.count + 1}
      case "-": return {...state, count: state.count - 1}
      default: return state
    }
  }

  var [state, dispatch] = useReducer(reducer, {count: 0});
  var valueInput = useRef(0);

  const handleAdd = () => {
    dispatch({type: "+"})
  }

  const handleMinus = () => {
    dispatch({type: "-"})
  }

  const handleChange = (e) => {
    console.log(valueInput.current.value)
  }

  // UseEffect
  const [data, setData] = useState([]);

  var url = 'https://jsonplaceholder.typicode.com/todos?userId=1';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
  })

  // React.Memo

  const ColoredText = ({number}) => {
    const isEven = number % 2 === 0;
    return <span style={{color: isEven ? "Red" : "Green"}}>Hello World</span>
  }

  const MemoColoredText = React.memo(
    ColoredText,
    (prevProps, nextProps) => {
      return (nextProps.number % 2 === 0) === (prevProps.number % 2 === 0)
    }
  );

  const [number, setNumber] = useState(0);

  return (
    <>
      <input ref={valueInput} onChange={handleChange} type='text' />
      <span>{state.count}</span>
      <br />
      <button onClick={handleAdd} style={{backgroundColor:"Green"}}>Increse</button>
      <button onClick={handleMinus} style={{backgroundColor:"Red"}}>Decrese</button>
      <br />

      {/* useEffect */}
      <ul>
        {
          data.map((item, index) => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>

      {/* React.Memo */}
      {/* <ColoredText number={number}/> */}
      <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
      <MemoColoredText number={number}/>
    </>
  )
}

export default App
