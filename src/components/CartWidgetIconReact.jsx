import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidgetIconReact = () => {
  const { cart } = useContext(CartContext);
  console.log("Carrito actual", cart);
  return (
    <div>
      <FaCartPlus fontSize={"1 rem"} color="black"/>
    </div>
  );
};
export default CartWidgetIconReact;