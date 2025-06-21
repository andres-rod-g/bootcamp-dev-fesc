import { Button } from '@/components/ui/button';
import { useEffect, useState, type FC } from 'react';

type Props = {};
const CounterComponent: FC<Props> = ({ }) => {
    const [number, setNumber] = useState(100)

    const incrementarContador = () => {
        setNumber(number + 1)
    }

    const disminuirContador = () => {
        setNumber(number - 1)
    }

    const reiniciarContador = () => {
        setNumber(100)
    }

    useEffect(() => {
        // Obtener los usuairos de la base de datos par amostrarlos en una tabla.
        // pedirBaseDeDatos()

    }, [number]) // Dependencias

    const pedirBaseDeDatos = () => {
        console.log("Pidiendo información... 💸")
    }


    return (
        <div className=' flex flex-col'>
            {number}

            <div className='flex flex-row space-x-2'>
                <Button onClick={() => disminuirContador()} >Disminuir</Button>
                <Button onClick={() => reiniciarContador()} >Reiniciar</Button>
                <Button onClick={() => incrementarContador()}>Incrementar</Button>
            </div>
        </div>
    );
};
export default CounterComponent;