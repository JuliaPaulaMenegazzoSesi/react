import Menu from "./components/Menu"
import style from './Calc.module.css'

export const Calc = () => {
    return(
        <>
        <Menu />
        <div class={style.sectionCalc}>
            <h1>Cálculos</h1>
        </div>
        </>
    )
}