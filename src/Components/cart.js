// import { UseSelector } from "react-redux"

import { UseSelector, useSelector,useDispatch } from "react-redux";
import store from "./store"
import store from "./store";
import Fooditems from "./food-cart";
import { clearcart, removeitem } from "./slice";




const Cart = () => {
    // const store = useSelector((store) => store)
    //above is not good way to suscribe or read whole store suscribe to specific value that you need 
    const dispatch = useDispatch()
    const handleclearcart = () => (dispatch(clearcart()))
    const handleremovecart = () => (dispatch(removeitem()))
       
    
    

    const cartitems = useSelector(store => store.cart.items)
    //above is only a good and performentway like store.cart.item suscribe here only not inside ui
    return (
      <div className="flex">
        <h1 className="font-bold">cart items</h1>
        <button
          className="bg-green-500 p-3 mt-48 w-20 h-10"
          onClick={() => handleclearcart()}
        >
          clear cart
        </button>
        <button
          className="bg-green-500 p-3 mt-48 w-20 h-10"
          onClick={() => handleremovecart()}
        >
          remove cart
        </button>

        <h1>cart - {cartitems.length}</h1>
        {/* <h1>{ store.Cart.items.length}</h1> */}

        {cartitems.map((item) => (
          <Fooditems key={item.id} {...item} />
        ))}
      </div>
    );
}
export default Cart