import './App.css'
import Events from './components/Events'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
function App() {

  return (
    <>
    <h1>Fundamentos do React</h1>
    {/* Comentario JSX */}
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
