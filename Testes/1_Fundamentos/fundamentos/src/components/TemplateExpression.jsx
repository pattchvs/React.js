import MyComponent from "./MyComponent"

const TemplateExpression = () => {
    const name = 'Patrick'
    const data = {
        age: 19,
        job: "Programador"
    }
  return (
    <div>
        <MyComponent/>
        <p>A soma é: {2+2}</p>
        <h3>Bem vindo, {name}</h3>
        <p>Sua idade é {data.age} e voce é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression