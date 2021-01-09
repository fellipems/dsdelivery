import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({message}: Props) {  // um componente função, o nome desse componente, sempre retornará elementos HTML ou outros componentes
    
    useEffect(() => {

    }, []);
    
    return (
        //<h1>Component Hello</h1>
        <h1>Hello {message} !</h1>
    )
}

export default Hello;   // exportando por default todo componente Hello

// Prop no react são os parâmetros que passamos em uma função, para uma função que é component