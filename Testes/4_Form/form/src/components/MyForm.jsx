import React, { useState } from 'react'
import "./MyForm.css"
const MyForm = ({userName, userEmail}) => {
  // Gerenciamento de dados
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
    
  }

  // Envio form
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name, email, bio, role)
    // Validação
    // Envio

    // Limpar form
    setName("")
    setEmail("")
    setBio("")
    setRole("")

  }
  return (
    <div>
        
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder='Insira seu nome' onChange={handleName} value={name}/>
            </div>
            {/* Label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input 
              type="text" 
              name="email" 
              id="" 
              placeholder='Insira seu e-mail' 
              onChange={(e)=> setEmail(e.target.value)}
              // Controlled input
              value={email || ""}
              />
            </label>
            {/* Textarea */}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
              <span>Função no sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
        
    </div>
  )
}

export default MyForm