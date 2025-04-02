import React from 'react'
import Register from './components/Register'
 import Delete from './components/Delete'
 import Update from './components/Update'
import View from './components/View'

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor:'greenyellow',display:'flex'}}>User registration system</h1>
      <Register></Register>
      <Update></Update>
      <Delete></Delete>
      <View></View>
    </div>
  )
}

export default App
