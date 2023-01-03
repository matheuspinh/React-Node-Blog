import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('')

  return (
    <div className="add">
      <div className="content">
        <input placeholder='Title' type="text" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Rascunho
          </span>
          <span>
            <b>Visibilidade:</b> Público
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className='file' htmlFor='file'>Enviar Imagem</label>
          <div className="buttons">
            <button>Salvar como rascunho</button>
            <button>Atualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="category">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor='art'>Arte</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor='science'>Ciência</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor='technology'>Tecnologia</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor='design'>Design</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write