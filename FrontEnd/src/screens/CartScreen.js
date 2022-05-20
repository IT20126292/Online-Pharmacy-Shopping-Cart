import "./CartScreen.css";
import jspdf from 'jspdf';
import "jspdf-autotable";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/shopping-cart/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((productPrice, item) => productPrice + item.productPrice * item.qty, 0)
      .toFixed(2);
  };

  // genarate pdf
  const generatePDF = tickets => {

    const doc = new jspdf();       
    const tableColumn = ["Name", "Quantity", "Price"];  
    // const subtotal = ["Sub Total"] ;   
    const tableRows = [];        
    const date = Date().split(" ");        
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

  tickets.map(ticket => {

    const ticketData = [
        
        ticket.productName,     
        ticket.qty,
        ticket.productPrice,    

    ];  
    tableRows.push(ticketData);  
  })

  tickets.map(tickettot => {

    const total = [       
    tickettot.totalPrice,       

    ];
    tableRows.push(total);
  })

  doc.text("CITY MEDICALS", 70, 8).setFontSize(13);
  doc.text("Cart Invoice", 14, 16).setFontSize(13);
  doc.text(`Date - ${dateStr}`, 14, 23);

  //right down width height
  //doc.addImage(img, 'JPEG', 170, 8, 25, 25);

  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
  doc.save("Product Report.pdf");

  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>My Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Sub Total ({getCartCount()}):   Rs.{getCartSubTotal()}</p>
            <p style={{ fontSize: 15, color: '#ff8605' }}>Discount:  Rs.0.00</p>
            <br/>
            <p style={{ fontSize: 22, color: '#00da7e', fontWeight:"bold" }}>Total Price:  Rs.{getCartSubTotal()}</p>
          </div>
          <div>
            <button className="button1">Checkout&nbsp;<i class="fa-solid fa-credit-card fa-lg"></i></button>
          </div>
          {/* pdf generate */}
          <div>
            <button className="button2" type="button" onClick={() => generatePDF(cartItems)}>Cart To Print&nbsp;<i class="fa-solid fa-print fa-lg"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
