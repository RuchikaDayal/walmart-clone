import './navbar.css'
import { Link } from 'react-router-dom'
import Bar from './bar.js';
import { useSelector , useDispatch} from 'react-redux';
import { authAction } from '../../Reduxstore/authaction';


function Navbar(props) {

  
  const counter = useSelector(state=> state.cart.totalQuantity);
  const login = useSelector(state=>  state.auth.login);
 const  dispatch =useDispatch()
  console.log(counter)
  
  const logo = 'https://i.ibb.co/9qbmNyX/Screenshot-2023-02-17-at-12-52-05-AM.png';
  const logoutHandler=()=>{
    dispatch(authAction.logout())
  }

  return (<>
    <nav className="navbar">

      <div className='firstpart'>
       <Link to='/'><img className='logo' src={'https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'} alt='1'/></Link> 
        <ul className='menu'>
          <li className='navicon'> <img src={logo} alt='1'/>Departments</li>
          <li className='navicon'>  <img src={logo} alt='1'/>Services</li>
        </ul>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search Everything at Walmart" />
        {/* <img alt='search' src='https://cdn-icons-png.flaticon.com/512/4477/4477966.png'></img> */}
      </div>
      <div className='firstpart'>
      <ul className='menu'>
        <li className='item'>
          <img src={'https://i.ibb.co/RyYrz4G/Screenshot-2023-02-17-at-1-10-36-AM.png'} />
        </li>
        <li className='item'><Link to='/login'>
          {/* <img alt='1' src={'https://i.ibb.co/qs8pPbV/Screenshot-2023-02-17-at-1-12-23-AM.png'} /> */}
          {!login ?<button  className='login'>Sing in</button>:<button onClick={logoutHandler} className='login'>Logout</button>}
         
          </Link></li>
      </ul>

      <div className='cart'>
     
       <span >{counter}</span>
     
        <Link to='/cart'><img src={'https://i.ibb.co/3R9Kt5L/shopping-cart-1.png'} /></Link>
      
      </div>
      </div>
    </nav>
    {props.showBar === true && <Bar />}
  </>
  );
}
export default Navbar
