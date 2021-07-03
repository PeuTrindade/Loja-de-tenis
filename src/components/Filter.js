import React from "react";
import "./Filter.css";

function Filter(props){
    return(
        <div className="containerAll">
        <div className="filter-container">
           <div className="filter-header">
             <h3>Filtros</h3>
           </div>
           <div className="filtros">
             <h3>Masculino</h3>
             <h3>Feminino</h3>
             <h3>Infantil</h3>
             <h3>Outlet</h3>
             <h3>Novidades</h3>
           </div>
           <div className="destaques">
              <h5>Exclusivos</h5>
              <h5>Novidades</h5>
              <h5>Outlet</h5>
           </div>
        </div>
          <div className="produtos">
            <div className="produto">
               <img src="../images/1.jpg"></img>
               <h4 className="titulo">Tênis Puma X J.COLE RS</h4>
               <h5 className="preco">R$799,99</h5>
               <h5 className="precoParcela">10X R$79,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/2.jpg"></img>
               <h4 className="titulo">Tênis Under Armour</h4>
               <h5 className="preco">R$999,99</h5>
               <h5 className="precoParcela">10X R$99,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/3.jpg"></img>
               <h4 className="titulo">Tênis Under Armour</h4>
               <h5 className="preco">R$999,99</h5>
               <h5 className="precoParcela">10X R$99,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/5.jpg"></img>
               <h4 className="titulo">Tênis Under Armour</h4>
               <h5 className="preco">R$899,99</h5>
               <h5 className="precoParcela">10X R$89,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/6.jpg"></img>
               <h4 className="titulo">Tênis Under Armour JET</h4>
               <h5 className="preco">R$599,99</h5>
               <h5 className="precoParcela">10X R$59,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/7.jpg"></img>
               <h4 className="titulo">Tênis Under Armour JET</h4>
               <h5 className="preco">R$599,99</h5>
               <h5 className="precoParcela">10X R$59,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/8.jpg"></img>
               <h4 className="titulo">Tênis Air Force 1</h4>
               <h5 className="preco">R$699,99</h5>
               <h5 className="precoParcela">10X R$69,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/9.jpg"></img>
               <h4 className="titulo">Tênis Nike Air Vapormax</h4>
               <h5 className="preco">R$1399,99</h5>
               <h5 className="precoParcela">10X R$139,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/10.jpg"></img>
               <h4 className="titulo">Tênis Nike Air Vapormax</h4>
               <h5 className="preco">R$1399,99</h5>
               <h5 className="precoParcela">10X R$139,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/11.jpg"></img>
               <h4 className="titulo">Tênis Air Jordan X PSG</h4>
               <h5 className="preco">R$1299,99</h5>
               <h5 className="precoParcela">10X R$129,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/13.jpg"></img>
               <h4 className="titulo">Tênis Nike Air Force 1 07</h4>
               <h5 className="preco">R$749,99</h5>
               <h5 className="precoParcela">10X R$74,99</h5>
               <button>Comprar</button>
            </div>
            <div className="produto">
               <img src="../images/14.jpg"></img>
               <h4 className="titulo">Tênis Nike KD14</h4>
               <h5 className="preco">R$1099,99</h5>
               <h5 className="precoParcela">10X R$109,99</h5>
               <button>Comprar</button>
            </div>
          </div>
        </div>
    )
}
export default Filter;