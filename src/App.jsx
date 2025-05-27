import React, { useState } from 'react';
import { Card, CardContent} from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
// import './App.css'


function App() {
 
  const drawCard = () => {
    // Add your card drawing logic here
    console.log('Drawing a card...')
  }

  return (
    <>
      <div>
      </div>
      <h1>Oracle Deck</h1>
      <button onClick={() => drawCard()}>
        Draw a Card
      </button>
      <div className="card">
        <h2>Card Title</h2>
        <p>Card description goes here.</p>
      </div>

    </>
  )
}

export default App
