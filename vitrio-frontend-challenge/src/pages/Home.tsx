import ListaDeProdutos from '../services/ListaDeProdutos';
import NewsLetter from '../components/NewsLetter';

export function Home(){
    return(
            <div><ListaDeProdutos/>
            <NewsLetter/>
            </div>
            
        
    )
}