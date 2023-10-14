import Image from "next/image";
import icon from "../../../../public/icons/header_cart.svg";

const CartHeader = () => {
  return (
    <div>
      <Image src={icon} alt="Carrito" width={33} height={33} />
    </div>
  );
};

export default CartHeader;
