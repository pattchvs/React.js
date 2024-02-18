
import './App.css'

// CSS de componente

import MyComponent from './components/MyComponent'
import Title from './components/Title';
function App() {
  const n = 15;
  const redTitle = true
  return (
    <>
      {/* CSS Global */}
      <h1>CSS no React</h1>
      {/* CSS de Componente */}
      <MyComponent/>
      <p>Pegou o css do componente</p>
      {/* Inline Style (NÃO FAZER) */}
      <p style={{color:"blue", padding:"25px", borderTop:"1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* Inline style dinamico */}
      <h2 style={n>10 ?{color:"purple"}:{color: "blue"}}>Eu mudo de cor de acordo com n</h2>
      {/* Classes dinamicas */}
      <h2 className={redTitle?"red-title":"title"}>Sou um H2 com uma classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
    </>
  )
}

export default App
