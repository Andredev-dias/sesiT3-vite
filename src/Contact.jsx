import Menu from "./components/Menu"
import style from "./Contact.module.css"

export const Contact = () => {
    return(
        <>
        <Menu/>
         <div className={style.wrapContact}>
            <div>
                <h2>Mapa</h2>
            </div>
            <div>
                <h2>Zap</h2>
            </div>
        </div>
        </>
       
    )
}