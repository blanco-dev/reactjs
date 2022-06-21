import { Link } from 'react-router-dom';
import '../App.css';

function CartWidget({numero}) {
  return (
    <div className="cart">
    <Link to='/cart'><box-icon name="cart"></box-icon></Link>
    {numero}
    </div>
)};

export default CartWidget;