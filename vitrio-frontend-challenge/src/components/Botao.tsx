interface botaoProps{
    sobconsulta:string;
    link:string;
}

export default function Botao(props:botaoProps){

    if(props.sobconsulta == "sim"){
        return(
            <a href={props.link} className= "botaoComprar"> CONSULTE</a>
        );

    }else{
        return(
            <a href={props.link} className= "botaoComprar"> COMPRAR</a>
        )
        
    }
    
}