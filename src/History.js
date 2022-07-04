import React from "react";
import './style.css'

export default function History({ history }) {
  return(
    <div className="history-display">
      <div className="history-header">Calculation History</div>
        {history.map((entry, index) => { return <p key={index}>{entry}</p>} )}
    </div>
  )
}
