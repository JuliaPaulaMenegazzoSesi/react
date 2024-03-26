import { Tilt } from 'react-tilt'


import Card from './components/card'
import img01 from "./assets/imgs/foto01.png"
import img02 from "./assets/imgs/foto02.png"
import img03 from "./assets/imgs/foto03.png"

import style from './App.module.css'


function App() {

  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            100,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  

  return (
    <div className={style.section01}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div><Card
      title="Paisagem 1"
      image={img01}
      text01="a"
      text02="Inflamação"
      /></div>
    </Tilt>
    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div><Card
      title="Paisagem 2"
      image={img02}
      text01="b"
      text02="Continuar"
      /></div>
    </Tilt>
    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div><Card
      title="Paisagem 3"
      image={img03}
      text01="c"
      text02="Entornar"
      /></div>
    </Tilt>
      
      
      
    </div>
  )
}

export default App
