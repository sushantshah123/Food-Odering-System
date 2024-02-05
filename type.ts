
export type Product = {
    id: number;
    price: number;
    title: string; 
    desc: string,
    img: string
    options?: { title: string; additionalPrice: number }[];
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };
  
  export type MyContextProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;
  };

  
// interface MyContextProps {
//     darkMode: boolean;
//     setDarkMode: (darkMode: boolean) => void;
//     cart: { id: number; title: string; quantity: number, price: number, desc: string, img: string }[];
//     addToCart: (item: { id: number; title: string, price: number, desc: string, img: string }) => void;
//     removeFromCart: (itemId: number) => void;
//     clearCart: () => void;
//     increaseQuantity: (itemId: number) => void;
//     decreaseQuantity: (itemId: number) => void;
//   }
  
//   interface ItemType {
//     id: number;
//     title: string;
//     price: number;
//     desc: string;
//     img: string;
//     quantity: number;
//   }