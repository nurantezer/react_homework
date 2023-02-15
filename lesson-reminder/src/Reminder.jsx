import React from 'react'
import remStyle from './rem.module.css'

const Reminder = ({name,hour,img}) => {
  return (
    <div>
      <main className={remStyle["container-div"]}>
        <img style={{ width: "200px" }} src={img} alt="" />
        <h2>Lesson Name: {name}</h2>
        <h2>Lesson Hour:{hour}</h2>
      </main>
    </div>
  );
}

export default Reminder