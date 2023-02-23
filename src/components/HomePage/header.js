import style from './header.module.css';

const Header=()=>{
    return(<>
    <div className={style.header}>
        <div className={style.headerimag1}><img src={'https://i.ibb.co/pX6HB0F/Screenshot-20230217-211101.png'}/></div>
        <div className={style.headerimag2}><img src={'https://i.ibb.co/Cs1LvzH/Screenshot-20230217-211625.png'}/></div>
        <div className={style.headerimag3}><img src={'https://i.ibb.co/nzg0NP9/Screenshot-20230217-211811.png'}/></div>

    </div>
    </>)
}
export default Header