import './App.css'
import Card from './components/card'
import img01 from "./assets/imgs/foto01.png"
import img02 from "./assets/imgs/foto02.png"
import img03 from "./assets/imgs/foto03.png"


function App() {

  return (
    <>
      <Card
      title="Paisagem 1"
      image={img01}
      text01="a"
      text02="Inflamação"
      />
      <Card
      title="Paisagem 2"
      image={img02}
      text01="b"
      text02="Continuar"
      />
      <Card
      title="Paisagem 3"
      image={img03}
      text01="c"
      text02="Entornar"
      />
    </>
  )
}

export default App
