import style from './Sidebar.module.css';
import imagemMinha from '../assets/IMG_8820.JPG';
import {PencilLine} from 'phosphor-react';
import {Avatar} from "./Avatar.jsx";
export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src={"https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <div className={style.profile}>

                <Avatar src={imagemMinha}/>
                <strong>Emili Willinghoefer</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}