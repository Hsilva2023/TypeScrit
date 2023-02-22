import Botao from "../components/Botao/Index"
import Relogio from "./Relogio";
import Style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../common/utils/Time";
import { Itarefa } from '../Types/tarefa';
import {useEffect, useState} from 'react';

interface Props{
    selecionado: Itarefa | undefined, finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {

    const [tempo, setTempo] = useState<number>();   
    useEffect(()=> {
if (selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo));
}
    },[selecionado]);

    function regressiva(contador : number = 0){
        setTimeout(() => {
            if (contador > 0){
                setTempo(contador - 1);
                return regressiva(contador -1);
            }            
            finalizarTarefa();

        }, 1000);
    }
       
   
    return (
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronometro</p>            
            <div className={Style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}