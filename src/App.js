import './style.css'
// import { useReducer } from 'react'

export const ACTIONS = {
  NUMBER: 'number',
  OPERATION: 'operation',
  CLEAR: 'clear',
  DELETE: 'delete',
  TOTAL: 'total'
}

// function reducer(state, { type, payload }) {
//   switch(type) {
//     case ACTIONS.NUMBER:
//       return {
//         ...state,
//         current: `${current || ''}${payload.digit}`
//       }
//   }
// }


function App() {
  // const [{ current, previous, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator">
      <div className='display'>
        <div className='previous-display'>123</div>
        <div className='current-display'>123</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>


    </div>
  );
}

export default App;
