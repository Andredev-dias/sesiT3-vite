import Card from "./components/Card"
import Foto01 from "./assets/imgs/foto1.jpg"
import Foto02 from "./assets/imgs/foto2.jpg"
import Foto03 from "./assets/imgs/foto3.jpg"

import style from "../src/App.module.css"

function App() {

  return (
    <section className={style.section1}>
      <Card title="Paisagem 01" 
            image={Foto01} 
            text1="Texto sobre a paisagem" 
            text2="Curitiba/PR"
      />
      <Card title="Paisagem 02" 
            image={Foto02} 
            text1="Texto sobre a paisagem 02" 
            text2="Guaratuba/PR"
      />
          <Card title="Paisagem 03" 
            image={Foto03} 
            text1="Texto sobre a paisagem 03" 
            text2="Colombo/PR"
      />
    </section>
  )
}

export default App
