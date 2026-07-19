import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/Product";

interface CollectionContextType {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
}

export const CollectionContext =
  createContext<CollectionContextType | undefined>(
    undefined
  );

interface ProviderProps {
  children: ReactNode;
}

export const CollectionProvider = ({
  children,
}: ProviderProps) => {

  // Load wishlist from Local Storage when app starts
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add product to wishlist
  const addToWishlist = (product: Product) => {

    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
      alert("Product already in wishlist!");
      return;
    }

    setWishlist((prev) => [...prev, product]);
  };

  // Remove product from wishlist
  const removeFromWishlist = (id: number) => {

    setWishlist((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };

  return (
    <CollectionContext.Provider
      value={{
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

// Custom Hook
export const useCollection = () => {

  const context = useContext(CollectionContext);

  if (!context) {
    throw new Error(
      "useCollection must be used within a CollectionProvider"
    );
  }

  return context;
};

export default CollectionProvider;