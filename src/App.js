import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
import produto from './prod';
function App() {

  var [prod, setProd] = useState("");
  var [preco, setPreco] = useState("");
  var [desc, setDesc] = useState("");
  var [esto, setEsto] = useState("");
  var [prodDig1, setProdDig1] = useState("");
  var [prodDig2, setProdDig2] = useState("");

  const prodDig = (e) => {
    setProd(e.target.value);
    setPreco(e.target.value);
    setDesc(e.target.value);
    setEsto(e.target.value);
    produto.map(lista => (prod.name.prod, prod.preco.preco,
      prod.descricao.desc, prod.estoque.esto));
  }

  const inserir = async () => {
    const insere = await axios.post("http://3.137.177.147:3000/produtos")
  }

  const digitou1 = (e) =>{
    setProdDig1(e.target.value);
    setProdDig2(e.target.value);
  }

  const edit = async () => {
    if(prod.value === prodDig2){
      const editar = await axios.put("http://3.137.177.147:3000/produtos/nome")
    }
    
  }

  const deletar = async () => {
    if(prod.value === prodDig1){
      const deleta = await axios.delete("http://3.137.177.147:3000/produtos/nome")
    }
  }
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Cadastro de Produtos</h1>
        <p className="lead">
          Informe o nome do produto abaixo
        </p>

        <div className="row mb-4">
          <div className="col-md-6">

            <input
              className="form-control"
              value={prod}
              onChange={prodDig}
            />
          </div>
        </div>

        <p className="lead">
          Informe o preço do produto abaixo
        </p>
        <div className="row mb-4">
          <div className="col-md-6">

            <input
              className="form-control"
              value={preco}
              onChange={prodDig}
            />
          </div>
        </div>
        <p className="lead">
          Informe a descrição do produto abaixo
        </p>
        <div className="row mb-4">
          <div className="col-md-6">

            <input
              className="form-control"
              value={desc}
              onChange={prodDig}
            />
          </div>
        </div>
        <p className="lead">
          Informe o estoque do produto abaixo
        </p>
        <div className="row mb-4">
          <div className="col-md-6">

            <input
              className="form-control"
              value={esto}
              onChange={prodDig}
            />
          </div>
        </div>
        <button
          onClick={inserir}
        >Inserir
        </button>

        <div>
          <p className="lead">
            Informe o nome do produto para deletar
          </p>
          <div className="row mb-4">
            <div className="col-md-6">

              <input
                className="form-control"
                value={prodDig1}
                onChange={digitou1}
              />
            </div>
          </div>

          <button
            onClick={deletar}
          >Excluir
          </button>
        </div>
        <p className="lead">
          Informe o nome do produto para alterar
        </p>
        <div className="row mb-4">
          <div className="col-md-6">

            <input
              className="form-control"
              value={prodDig2}
              onChange={digitou1}
            />
          </div>
        </div>
        <button
          onClick={edit}
        >Editar
        </button>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
