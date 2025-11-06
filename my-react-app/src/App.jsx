import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { recipes } from './data.js'
import RecipeContainer from './RecipeContainer.jsx'
import Recipe from './Recipe.jsx'

function App() {

  return (
    <div className="App">
      <h1>Recipe List</h1>
      <RecipeContainer/>
    </div>
  )
}

export default App;
