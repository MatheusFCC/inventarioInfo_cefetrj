import  style from '../style/Inicial.module.css';
import { HomeModal } from '../components/HomeModal';

export default function Home() {
  return (

    <div className={style.App}>
      <HomeModal />
   </div>
  )
}
