import React from "react";
import { Itarefa } from "../../Types/tarefa";
import Botao from "../Botao/Index";
import style from './Formulario.module.scss';

class Formulario extends React.Component<{
setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
  
}>
{
    state = {
        tarefa:"",
        tempo: "00:00"
    }
    
adicionarTarefa(evento: React.FormEvent){
    evento.preventDefault();    
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
}

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}> 
                <div className={style.inputContainer}>
<label htmlFor="Tarefa">
    Adicionar um novo estudo
</label>
<input
type="Test"
name="Tarefa"
id="Tarefa"
value={this.state.tarefa}
onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
placeholder="O que vc quer estudar?"
required/>
                </div>
                <div className={style.inputContainer}>
                <label>
                    Tempo

</label>
<input
 type="Time"
 step="1"
 name="tempo"
 value={this.state.tempo}
 onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
 id="tempo"
 min="00:00:00"
 max="01:30:00"
 required/>

                </div>
<Botao>
Adicionar
</Botao>
            </form>
        )        
    }
}

export default Formulario;