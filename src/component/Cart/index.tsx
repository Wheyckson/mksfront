import { X } from "@phosphor-icons/react";
import Image from "next/image";

import {
  BuyWrapper,
  CartItens,
  CartValue,
  CloseButton,
  FinishBuy,
  FooterContainer,
  OpenContainer,
  OpenHeader,
  QtdContainer,
} from "./styles";
import { useCart } from "@/hooks/useCart";
import { valueFormatter } from "@/utils/price-formatter";
import { useState } from "react";
import { IProduct } from "@/context/CartProvider";

interface a {
  count: number;
  p: IProduct[];
}

export function Cart({ toggleClose }: any) {
  const {
    cartItems,
    removeCartItem,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useCart();
  const [qtd, setQtd] = useState(1);

  var totalPrice = cartItems
    .map((cart) => Number(cart.price))
    .reduce((acc, value) => acc + value);

  return (
    <OpenContainer>
      <BuyWrapper>
        <OpenHeader>
          <h1>Carrinho de compras</h1>

          <X size={32} onClick={toggleClose} />
        </OpenHeader>

        <>
          {cartItems.map((cartItem) => (
            <CartItens key={cartItem.id}>
              <Image
                src={cartItem.photo}
                width={130}
                height={138}
                alt="imagem do produto"
              />

              <span>{cartItem.name}</span>

              <QtdContainer>
                <span>Qtd:</span>

                <div>
                  <button
                    onClick={() => decrementItemQuantity(cartItem.id, qtd)}
                    title="Diminuir quantidade"
                  >
                    -
                  </button>

                  <span> {qtd} </span>

                  <button
                    onClick={() => incrementItemQuantity(cartItem.id, qtd)}
                    title="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
              </QtdContainer>

              <h1>{valueFormatter(Number(cartItem.price))}</h1>

              <CloseButton>
                <X size={32} onClick={() => removeCartItem(cartItem.id)} />
              </CloseButton>
            </CartItens>
          ))}
        </>

        <FooterContainer>
          <CartValue>
            <span>Total: </span>
            <span>{valueFormatter(totalPrice)} </span>
          </CartValue>
        </FooterContainer>
      </BuyWrapper>

      <FinishBuy>Finalizar Compra</FinishBuy>
    </OpenContainer>
  );
}
