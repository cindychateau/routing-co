import { useParams } from 'react-router-dom';

const ComponenteParametros = props => {

    const {palabra, color, bg} = useParams();

    return (
        <div>
            {
                isNaN(palabra) ?
                    <div style={
                        //Si existe la variable color
                        color ?
                            {color: color, backgroundColor: bg}
                        :
                            null
                    } >La palabra es: {palabra}</div>
                :
                    <div>El número es: {palabra}</div>
            }
        </div>
    )


}

export default ComponenteParametros;