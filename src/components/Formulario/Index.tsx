import React, { useState } from "react";
import { Itarefa } from "../../Types/tarefa";
import Botao from "../Botao/Index";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}


function Formulario({ setTarefas} : props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }]);

        //função que reseta o select 
        setTarefa("");
        setTempo("00:00");
    }


return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                Adicionar um novo estudo
            </label>
            <input
                type="test"
                name="tarefa"
                id="tarefa"
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                placeholder="O que vc quer estudar?"
                required />
        </div>
        <div className={style.inputContainer}>
            <label>
                Tempo

            </label>
            <input
                type="Time"
                step="1"
                name="tempo"
                value={tempo}
                onChange={evento => setTempo(evento.target.value)}
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required />

        </div>
        <Botao type="submit">
            Adicionar
        </Botao>
    </form>
)
}

export default Formulario;