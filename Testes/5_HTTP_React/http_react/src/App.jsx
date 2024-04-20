import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

import './App.css'
const url = "http://localhost:3000/products"
function App() {
  const [products, setProducts] = useState([])
  // custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  // useEffect(()=>{
  //   async function getData(){
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   getData()
  // }, [])

  // Envio de dados
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const product = {
      name,
      price
    }

    // Refatorando

    httpConfig(product, "POST")

    // console.log(product)
    // const res = await fetch(url,{
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })

    // // Carregamento dinamico

    // const addedProduct = await res.json()

    // setProducts((prevProducts)=>[...prevProducts, addedProduct])
  }
  return (
    <>
      <h1>HTTP em React</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product)=>{
          return <li key={product.id}>{product.name} - R${product.price}</li>
        })}
      </ul>
      {/* Envio de dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
          </label>
          {/* <input type="submit" value="Enviar" /> */}
          {loading && <input type='submit'disabled value="Aguarde..."></input>}
          {!loading && <input type='submit' value="Enviar"></input>}
        </form>
      </div>
    </>
    
  )
}

export default App
