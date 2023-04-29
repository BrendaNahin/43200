import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://th.bing.com/th/id/OIP.yhwAEilaqsz7OebLFZ90eAHaHa?pid=ImgDet&rs=1"
  return (
    <div>
      <img  className= 'imgCarrito'src={imgCarrito} alt="carrito" />
      <strong> 1 </strong>
    </div>
  )
}

export default CartWidget
