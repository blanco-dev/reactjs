import '../App.css';

function CartWidget({numero}) {
  return (
    <div className="cart">
    <box-icon name="cart"></box-icon>
    {numero}
    </div>
)};

export default CartWidget;