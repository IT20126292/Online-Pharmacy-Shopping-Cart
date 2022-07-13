import "./CartScreen.css";
import "../Images/logo.jpg"
import jspdf from 'jspdf';
import "jspdf-autotable";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import CartItem from "../components/shopping-cart/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

toast.configure()

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
    toast.success('Quantity Updated Successfully',{position:toast.POSITION.TOP_RIGHT, autoClose: 2000})
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.success('Remove Item From Your Cart',{position:toast.POSITION.TOP_RIGHT, autoClose: 2000})
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
    var imgData = "https://upload.wikimedia.org/wikipedia/commons/2/25/Citymedicalslogo.png";   
    const tableColumn = ["Name", "Quantity", "Price"];  
    // const subtotal = ["Sub Total"] ;   
    const tableRows = [];        
    const date = Date().split(" ");        
    const dateStr = date[1] + " " + date[2] + ", " + date[3];

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

    doc.addImage(imgData, 'JPEG', 77, 11, 60, 40);
    doc.text("Cart Item List", 14, 75).setFontSize(10);
    doc.text(`Date - ${dateStr}`, 14, 82);
    doc.text("All Right Reserved", 90, 284);
    doc.text("citymedicals@gmail.com | www.citymedicals.netlify.app | +94119 119 119", 47, 290);
    doc.text("© 2022 Copyright @CityMedicals", 79, 278).setFontSize(20);
    

    // right down width height

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 9, }, startY:90});
    doc.save("Cart Report.pdf");

    // © 2022 Copyright @CityMedicals

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
            <button className="button1" disabled={cartItems.length === 0}>Checkout&nbsp;<i class="fa-solid fa-credit-card fa-lg"></i></button>
          </div>
          {/* pdf generate */}
          <div>
            <button className="button2" type="button" disabled={cartItems.length === 0} onClick={() => generatePDF(cartItems)}>Cart To Print&nbsp;<i class="fa-solid fa-print fa-lg"></i></button>
          </div>
        </div>
        <ToastContainer autoClose={2000}/>
      </div>
    </>
  );
};

export default CartScreen;
