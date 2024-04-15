import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer, Container } from "./styles";

import Image from "next/image";
import logoImg from "../../assets/logo.svg";

import { motion, useCycle } from "framer-motion";
import { Cart } from "../Cart";
import { useCart } from "@/hooks/useCart";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export function Header() {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.length;

  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggleClose = (event: any) => {
    toggleOpen(0); // false
  };

  return (
    <Container>
      <Image src={logoImg} alt="Logo" />

      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div className="background" variants={sidebar} />
      </motion.nav>

      {!isOpen ? (
        <CartContainer onClick={() => toggleOpen()} disabled={cartQuantity < 1}>
          <ShoppingCart size={26} />
          <span>{cartQuantity}</span>
        </CartContainer>
      ) : (
        <>
          <Cart toggleClose={toggleClose} />
        </>
      )}
    </Container>
  );
}
