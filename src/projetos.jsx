import react, { useState } from 'react'
import "./combate.js"
import "./index.html"


function Projetos() {

    
      function cards(titulo,paragrafo,imagem){

      }
    const [projetos, setProjetos] = useState([])

    function clickProjetos() {
        setProjetos([])
    }



    <button type='button' onClick={clickProjetos}> Mostra Os Projetos</button>

    {
        projetos.map((projetos, index) => (
            <p key={index}>{projetos}</p>
        ))
    }
}




export default Projetos