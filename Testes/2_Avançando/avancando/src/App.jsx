import './App.css'
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";
function App() {

  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* useState */}
      <Data/>
      {/*List render*/}
      <ListRender/>
      {/*Render condicional*/}
      <ConditionalRender/>
    </div>
   
  )
}

export default App
