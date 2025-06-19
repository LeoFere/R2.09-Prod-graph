import { useEffect, useState } from 'react'
import './App.css'
import { PowerGlitch } from 'powerglitch'
import Parallax from 'parallax-js'

function App() {
  const [aureoleActive, setAureoleActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect
  (() => {
    PowerGlitch.glitch('.glitch2')
    
    PowerGlitch.glitch(
      '.glitch',
      {
          playMode: 'always',
          hideOverflow: true,
          timing: {
              duration: 1500,
              iterations: 200,
              easing: 'ease-in-out',
          },
          glitchTimeSpan: {
              start: 0.3,
              end: 0.5,
          },
          shake: {
              velocity: 5,
              amplitudeX: 0.4,
              amplitudeY: 0.4,
          },
          slice: {
              count: 7,
              velocity: 10,
              minHeight: 0.02,
              maxHeight: 0.40,
              hueRotate: true,
          },
      }
  )

  PowerGlitch.glitch(
    '.glitch3',
    {
        playMode: 'always',
        hideOverflow: true,
        timing: {
            duration: 1200,
            iterations: 200,
            easing: 'ease-in-out',
        },
        glitchTimeSpan: {
            start: 0.4,
            end: 0.7,
        },
        shake: {
            velocity: 6,
            amplitudeX: 0.2,
            amplitudeY: 0.2,
        },
        slice: {
            count: 10,
            velocity: 4,
            minHeight: 0.02,
            maxHeight: 0.40,
            hueRotate: true,
        },
    }
)

  }, []);

  useEffect(() => {
    const scene = document.getElementById('image');
    const parallaxInstance = new Parallax(scene, {
      selector: '.parallax-layer',
    });

    return () => {
      parallaxInstance.destroy();
    };
  }
  , []);

  return (
    <>
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>日本語のテキスト</h2>
            <p>Traduction : Bonjour, Je m'appelle Leo Ferezou j'ai 19ans et je suis actuellement étudiant en BUT MMI</p>
            <button onClick={() => setModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div className="modal-content" style={{maxWidth:'900px',padding:0}} onClick={e => e.stopPropagation()}>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{borderRadius:'12px'}}
            ></iframe>
            <button onClick={() => setVideoModalOpen(false)} style={{marginTop:'1rem'}}>Fermer</button>
          </div>
        </div>
      )}
      <div id='container'>
      <img className='layer croixHG' src="src/assets/CroixBlanche.png" alt="Croix" />
          <img  className='layer croixBG' src="src/assets/CroixBlanche.png" alt="Croix" />
          <img  className='layer croixBD' src="src/assets/CroixBlanche.png" alt="Croix" />
        <div id='image'>
          
          <img data-depth="0.2" className='layer background' src="src/assets/Background.png" alt="background" />
          <img data-depth="0.2" className='layer writing glitch3' src="src/assets/Japan writing.png" alt="japanese text" onClick={() => setModalOpen(true)} style={{cursor:'pointer'}} />
          <img data-depth="0.2" className='layer writingGrand glitch'  src="src/assets/JapanWritingGrand.png" alt="japanese text" />
          <img data-depth="0.2" className='layer writingG glitch2' src="src/assets/JapanWritingG.png" alt="japanese text" />
          <img data-depth="0.8" className='layer parallax-layer Sprite'src="src/assets/Sprite.png" alt="sprite" />
         

          <div
            className={`aureole-wrapper${aureoleActive ? ' active' : ''}`}
            onClick={() => setAureoleActive(!aureoleActive)}
          >
            <img className='layer anneauxFront aureole' src="src/assets/anneauCielFront.png" alt="AnneauFront" />
            <img className='layer anneauxBack aureole' src="src/assets/anneauCielBack.png" alt="AnneauBack" />
          </div>


{/*
          <svg data-depth="0.2" className='layer diagonalRect parallax-layer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 1900">
            <defs>
              <clipPath id="diagonalRectMask">
                <rect 
                  x="-280" 
                  y="-300" 
                  width="3500" 
                  height="700" 
                  transform="rotate(45, 0, 0)"
                />
              </clipPath>
            </defs>
            <rect 
              className="diagonalRect-rect"
              x="-280" 
              y="-300" 
              width="3500" 
              height="700" 
              transform="rotate(45, 0, 0)"
              onClick={() => setVideoModalOpen(true)}
            />
            <rect 
              x="-280" 
              y="-300" 
              width="3500" 
              height="700" 
              transform="rotate(45, 0, 0)"
              fill="white"
              clipPath="url(#diagonalRectMask)"
            />
          </svg>
*/}

<div data-depth="0.4" className='parallax-layer diagonalDivContainer'>
          <div className='diagonalDiv' onClick={() => setVideoModalOpen(true)}>
            <div className='diagonalDivSwoosh'>
            
            </div>
            <div className='diagonalDivSwoosh2'>
            
            </div>
          </div>
          </div>

          <svg data-depth="0.2" className='layer bottomLeftRect' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect 
              className="bottomLeftRect-rect"
              x="0" 
              y="0" 
              width="300" 
              height="130" 
            />
          </svg>

          <img data-depth="0.2" className='layer line' src="src/assets/barre carré.png" alt="" />

          <svg data-depth="0.2" className='layer topRightRect' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 110">
      <rect 
        x="0" 
        y="60" 
        width="300" 
        height="40" 
        fill="red"
      />
    </svg>
    <img data-depth="0.2" className='Yeux' src="src/assets/yeux.png" alt="" />

        </div>
      </div>

    </>
  )
}

export default App