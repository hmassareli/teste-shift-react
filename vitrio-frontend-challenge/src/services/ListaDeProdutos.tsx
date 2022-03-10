import axios from "axios"; // usando nova lib de consumo de API

import { useState, useEffect } from "react";
import {ItemProduct} from "../components/ItemProduct"

interface productsData{ // especificar oq o objeto deve ter
  productName: string;
  productId: string;
  link: string;
  items: itemsData[]; // como o atr items é um array, preciso especificar
  sobconsulta : string;
}
interface itemsData{
  
  sellers: sellersData[];
  itemId: string;
  images: imagesData[];
}
interface imagesData{
  imageUrl: string;
}
interface sellersData{
  commertialOffer:{
    Price:number;
  }
}

function ListaDeProdutos() {
    //chamando a função useState com o destructuring e tipando ele com a interface
    const [dataProducts, setDataProducts] = useState<productsData[]>();

    async function getData() {
      await axios.get('https://raw.githubusercontent.com/hmassareli/APIS/main/catalogo.json')
        .then(response => { setDataProducts(response.data.product); 
        console.log(response.data) })
    }
    
    useEffect(() => { //O useEffect define coisas a serem feitas no início da função, ou quando o gatilho for acionado
      getData();
      console.log(dataProducts);
 
    }, [])

    
    return (
      <div id="produtos">
        {dataProducts ? // if ternário - caso exista.. Senão...
          dataProducts.map(items => {
            return (
              <div key={items.productId}>
                <ItemProduct productName={items.productName} link = {items.link} imageUrl={items.items[0].images[0].imageUrl} Price = {items.items[0].sellers[0].commertialOffer.Price} sobconsulta = {items.sobconsulta}  productId = {items.productId}/>
              </div>
            )
          })
          :
          <div id="preloader">
            <div className="inner">

              {/*Animação Preloader */}
              
              <div className="bolas">
                  <div></div>
                  <div></div>
                  <div></div>                    
              </div>
            </div>
          </div>
        }
       
  
      </div >
    )
  }
  
  export default ListaDeProdutos;
  