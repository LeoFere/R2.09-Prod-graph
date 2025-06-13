import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='container'>
        <div id='image'>
          <img className='layer background' src="src/assets/Background.png" alt="background" />
          <img className='layer writing' src="src/assets/Japan writing.png" alt="japanese text" />
          <img className='layer writingGrand' src="src/assets/JapanWritingGrand.png" alt="japanese text" />
          <img className='layer writingG' src="src/assets/JapanWritingG.png" alt="japanese text" />
          <img className='layer Sprite'src="src/assets/Sprite.png" alt="sprite" />
          <img className='layer anneauxBack' src="src/assets/anneauCielBack.png" alt="AnneauBack" />
          <img className='layer anneauxFront' src="src/assets/anneauCielFront.png" alt="AnneauFront" />

          <img className='layer croixHG' src="src/assets/CroixBlanche.png" alt="Croix" />
          <img className='layer croixBG' src="src/assets/CroixBlanche.png" alt="Croix" />
          <img className='layer croixBD' src="src/assets/CroixBlanche.png" alt="Croix" />

          <svg className='layer diagonalRect' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 1900">
            <rect 
              x="-280" 
              y="-300" 
              width="3500" 
              height="700" 
              fill="red"
              transform="rotate(45, 0, 0)"
            />
          </svg>

          <svg className='layer bottomLeftRect' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect 
              x="0" 
              y="0" 
              width="300" 
              height="130" 
              fill="red"
            />
          </svg>

          <img className='layer line' src="src/assets/barre carré.png" alt="" />

          <svg className='layer topRightRect' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 110">
      <rect 
        x="0" 
        y="60" 
        width="300" 
        height="40" 
        fill="red"
      />
    </svg>

    <img className='Yeux' src="src/assets/yeux.png" alt="" />

        </div>
      </div>
    </>
  )
}

export default App