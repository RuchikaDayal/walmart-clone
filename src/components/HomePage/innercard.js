import style from './innercard.module.css';
import Carousel from './carousel.js';
import {Link} from 'react-router-dom'
const InnerCard =()=>{
return (
    <>
    <div className={style.middle}>
        <div className={`${style.left}`}>
            <Link to='/product'><Carousel/></Link>

        </div>
        <div className={`${style.right} ${style.hide}`}>
           <Link to='/product'> <img src='https://i.ibb.co/kGP07yf/Screenshot-2023-02-17-at-6-16-43-PM.png' 
            // style={{width:'100%', margin:0, height:'100%'}} 
            className={style.sideProduct}
            alt='side products'/></Link>
        </div>
    </div>
    <div className={style.middle}>
        <div className={`${style.left} ${style.middleCard}`}>
            <div className={`${style.collection} ${style.combo}`}>

                <div className={`${style.comboItem}`}>
                <Link to='/product'>  <img src='https://i.ibb.co/Qd7wDnn/Screenshot-2023-02-17-at-8-52-54-PM.png' alt='data' style={{margin:'auto', width: '100%', height: '100%'}}/></Link>
                </div>
                <div className={`${style.comboItem} ${style.comboBottom}`}>
                <Link to='/product'>   <img src='https://i.ibb.co/jhpN7s5/Screenshot-2023-02-17-at-8-53-00-PM.png' alt='data' style={{margin:'auto', width: '100%', height: '100%'}}/></Link>
                </div>

            </div>
            <div className={`${style.collection}`}>
            <Link to='/product'>  <img src='https://i.ibb.co/Mp5VYML/Screenshot-2023-02-17-at-8-53-06-PM.png' alt='data' style={{margin:'auto', width: '100%', height: '100%'}}/></Link>
            </div>

        </div>
        <div className={`${style.right} ${style.hide}`}>
        <Link to='/product'>   <img src='https://i.ibb.co/0F3VHS4/Screenshot-2023-02-17-at-9-06-59-PM.png' 
            // style={{width:'100%', margin:0, height:'100%'}} 
            className={style.sideProduct}
            alt='side products'/></Link>
        </div>
    </div>
    <div className={style.footer}>Members get free shipping with no order minimum!</div>
    </>
)
}
export default InnerCard;