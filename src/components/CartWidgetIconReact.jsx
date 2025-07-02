import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIconReact = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaCartPlus fontSize={"1.2rem"} color="black" />
      {cartQuantity() > 0 && (
        <span
          style={{
            position: "absolute",
            top: -5,
            right: -10,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
        >
          {cartQuantity()}
        </span>
      )}
    </div>
  );
};

export default CartWidgetIconReact;
