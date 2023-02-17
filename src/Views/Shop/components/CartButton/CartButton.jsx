import ("./CartButton.css");

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
export default function CartButton() {
  return (
    <button className="cart-button">
      <ShoppingCartCheckoutIcon sx={{color:"white"}}  /> 
    </button>
  );
}


