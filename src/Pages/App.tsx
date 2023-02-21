import React, { useState } from 'react';
import Formulario from '../components/Formulario/Index';
import Lista from '../components/Lista/Index';
import { Cronometro } from '../Cronometro';
import { Itarefa } from '../Types/tarefa';

import style from './App.module.scss';


function App() {
  const [tarefa, setTarefas] = useState<Itarefa[]>([]);
    
   
  return (
    <div className={style.AppStyle}>

   <Formulario setTarefas={setTarefas}/>
   <Lista tarefas={tarefa}/>
  <Cronometro/>
    </div>
  );
}

export default App;
