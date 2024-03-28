import style from "./Calc.module.css"
import Menu from "./components/Menu"

import { useEffect, useState } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    useEffect(()=> {
        if(numero1 !== undefined && numero2 !== undefined){
            setRespSoma(parseFloat(numero1) + parseFloat(numero2))
            setRespSub(parseFloat(numero1) - parseFloat(numero2))
            setRespMulti(parseFloat(numero1) * parseFloat(numero2))
            setRespDiv(parseFloat(numero1) / parseFloat(numero2))
        }
    }, [numero1, numero2])


    return(
        <>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
                <div className={style.wrapInputs}>
                    <input
                     type="text"
                     placeholder="Insira o primeiro número"
                     className={style.inputStyle}
                     value={numero1}
                     onChange={(e) => setNumero1(e.target.value)}
                     />
                    <input 
                     type="text"
                     placeholder="Insira o segundo número"
                     className={style.inputStyle}
                     value={numero2}
                     onChange={(e) => setNumero2(e.target.value)}
                     />
                </div>
                <div>
                    <div>
                        <h1>Soma</h1>
                        {!isNaN(respSoma) && respSoma}
                    </div>
                    <div>
                        <h1>SUb</h1>
                        {!isNaN(respSub) && respSub}
                    </div>
                    <div>
                        <h1>Multi</h1>
                        {!isNaN(respMulti) && respMulti}
                    </div>
                    <div>
                        <h1>Div</h1>
                        {!isNaN(respDiv) && respDiv.toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    )
}