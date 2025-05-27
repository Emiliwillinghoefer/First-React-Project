import {Post} from "./componentes/Post.jsx";
import './global.css';
import style from './App.module.css';

import {Header} from "./componentes/Header.jsx";
import {Sidebar} from "./componentes/Sidebar.jsx";
export function App() {
  return (
  <div >
    <Header/>
   <div className={style.wrapper}>
    <Sidebar/>
     <main>
       <Post
           author={"Emili Willinghoefer"}
           content={"conteudosssss"}
       />
       <Post
           author={"Gabriel Guerezi"}
           content={"Post do Gabriel, bem bonito."}
       />
     </main>
   </div>
  </div>
  )
}


