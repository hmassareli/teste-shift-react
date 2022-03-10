import React from "react";
import Botao from "../components/Botao";

interface productData{ // especificar oq o objeto deve ter
    productName: string;
    productId: string;
    imageUrl : string;
    link: string;
    Price:number;
    sobconsulta:string;
  }

  export function ItemProduct(props: productData) {

    var formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }

    return (
        <div className = "item" id = {props.productId} >
            <a href={props.link}>
                <img height="100px" src={props.imageUrl} />
            </a >
                <div>
                    <h2 className="nomeProduto">{props.productName}</h2>
                    <p className="preco">{props.Price.toLocaleString('pt-BR', formato)}</p>
                    <p>10x de {(props.Price / 10).toLocaleString('pt-BR',formato)} </p>
                    <Botao sobconsulta = {props.sobconsulta} link = {props.link}/>
                    
                </div>
           

        </div>


        
    )
}

/*export function ItemProduct(props:productsData){
    return(
        <div className = "item" id = {props.productId} >
            <img src="" alt="" />

        </div>
        
    )
}
*/