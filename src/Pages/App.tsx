import React, { useState } from 'react';
import Formulario from '../components/Formulario/Index';
import Lista from '../components/Lista/Index';
import  Cronometro  from '../Cronometro/Index';
import { Itarefa } from '../Types/tarefa';
import style from './App.module.scss';

function App() 
{
  const [tarefa, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();


  function selecionaTarefa(tarefaSelecionado: Itarefa) 
  {
    setSelecionado(tarefaSelecionado);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id? true: false
    })));
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
      if (tarefa.id === selecionado.id){
        return{
          ...tarefa,
          selecionado: false,
          completado:true
        }
      }
      return tarefa;
    }))
  }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefa}
        selecionaTarefa={selecionaTarefa} />
      <Cronometro 
      selecionado ={selecionado} 
      finalizarTarefa = {finalizarTarefa}/>
    </div>
  );
}

export default App;
