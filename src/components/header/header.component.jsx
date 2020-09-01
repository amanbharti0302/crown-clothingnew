import React from 'react';
import { Link } from 'react-router-dom';


import {createStructuredSelector} from 'reselect'; // when there are lots of selector as here there are two selector seleccarthidden and selectcurrentuser we use createStructuredselector also we can do manually as we have done earlier

import {connect} from 'react-redux';  //higher component that lets us to modify our component 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import {auth} from '../../firebase/firebase.utils';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrrentUser} from '../../redux/user/user.selectors';


import './header.styles.scss';

const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden?null:
      <CartDropdown/>
    }
  </div>
);



//function to allow the accesc the state from root reducer
const mapStateToProps = createStructuredSelector({  /*state is top level root reducer state*/  //after using createstructuredselector there is no need of passing state as function
    currentUser:selectCurrrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);