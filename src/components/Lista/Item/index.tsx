import { Itarefa } from '../../../Types/tarefa';
import style from './Item.module.scss';

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionado: Itarefa) => void
}

export default function Item(
    { tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id,
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}aria-Label="Tarefa Completado"></span>}
        </li>
    )
}