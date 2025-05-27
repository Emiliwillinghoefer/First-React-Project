import styles from './Post.module.css';
import imagemMinha from "../assets/IMG_8820.JPG";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={imagemMinha}/>
                    <div className={styles.authorInfo}>
                        <strong>Emili Willinghoefer</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="25 de maio às 08:51h" dateTime={"2025-05-27"}>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href={"#"}>jane.design/doctorcare</a></p>
                <p>
                    <a href={"#"}>#novoprojeto</a>{' '}
                    <a href={"#"}>#nlw</a>{' '}
                    <a href={"#"}>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder={"Deixe o seu comentario"}/>

                <footer>
                    <button type={"submit"}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}