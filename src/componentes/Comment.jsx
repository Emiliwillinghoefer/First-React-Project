import styles from './Comment.module.css';
import style from "./Sidebar.module.css";
import imagemMinha from "../assets/IMG_8820.JPG";
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={imagemMinha}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Emili Willinghoefer</strong>
                        <time title="25 de maio às 08:51h" dateTime={"2025-05-27"}>Cerca de 1h atrás</time>
                    </div>
                    <button title={"Deletar comentário"}>
                        <Trash size={24}/>
                    </button>
                </header>
                    <p>Muito bem Gabriel, parabeeens !!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}