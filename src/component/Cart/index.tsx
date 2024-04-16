import { X } from "@phosphor-icons/react";
import Image from "next/image";

import { IProduct, ProductsProps } from "@/context/CartProvider";
import { useCart } from "@/hooks/useCart";
import { valueFormatter } from "@/utils/price-formatter";
import { useState } from "react";
import {
  BuyWrapper,
  CartItens,
  CartValue,
  CloseButton,
  EmptyCart,
  FinishBuy,
  FooterContainer,
  OpenContainer,
  OpenHeader,
  QtdContainer,
} from "./styles";

export function Cart({ toggleClose }: any) {
  const { cartItems, removeCartItem } = useCart();
  const [cart, setCart] = useState<ProductsProps[]>([]);

  function handleIncrementItem(id: string, product: IProduct) {
    const copyCart = [...cartItems];
    const item = copyCart.find((item) => item.products.id === id);

    if (!item) {
      copyCart.push({ products: product, count: 1 });
    } else {
      item.count = item.count + 1;
    }

    setCart(copyCart);
  }

  function handleDecrementItem(id: string) {
    const copyCart = [...cartItems];
    const item = copyCart.find((item) => item.products.id === id);

    if (item!.count > 1) {
      item!.count = item!.count - 1;
      setCart(copyCart);
    }
  }

  function calculatingProductPrice(price: string, quantity: number) {
    const calculating = Number(price) * quantity;

    return valueFormatter(calculating);
  }

  function finalPrice() {
    if (cartItems.length) {
      var totalPrice = cartItems
        .map((cart) => Number(cart.products.price) * cart.count)
        .reduce((acc, value) => acc + value);

      return valueFormatter(totalPrice);
    }
  }

  return (
    <OpenContainer>
      <BuyWrapper>
        <OpenHeader>
          <h1>Carrinho de compras</h1>

          <X size={32} onClick={toggleClose} />
        </OpenHeader>

        <>
          {cartItems.length ? (
            <>
              {cartItems.map((cartItem) => (
                <CartItens key={cartItem.products.id}>
                  <Image
                    src={cartItem.products.photo}
                    width={130}
                    height={138}
                    alt="imagem do produto"
                  />

                  <span>{cartItem.products.name}</span>

                  <QtdContainer>
                    <span>Qtd:</span>

                    <div>
                      <button
                        disabled={cartItem.count === 1}
                        onClick={() =>
                          handleDecrementItem(cartItem.products.id)
                        }
                        title="Diminuir quantidade"
                      >
                        -
                      </button>

                      <span> {cartItem.count} </span>

                      <button
                        onClick={() =>
                          handleIncrementItem(
                            cartItem.products.id,
                            cartItem.products
                          )
                        }
                        title="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </QtdContainer>

                  <h1>
                    {calculatingProductPrice(
                      cartItem.products.price,
                      cartItem.count
                    )}
                  </h1>

                  <CloseButton>
                    <X
                      size={32}
                      onClick={() => removeCartItem(cartItem.products.id)}
                    />
                  </CloseButton>
                </CartItens>
              ))}
            </>
          ) : (
            <>
              <EmptyCart>{`Seu carrinho esta vazio :´(`}</EmptyCart>
            </>
          )}
        </>

        <FooterContainer>
          <CartValue>
            <span>Total: </span>
            <span>{finalPrice()}</span>
          </CartValue>
        </FooterContainer>
      </BuyWrapper>

      <FinishBuy>Finalizar Compra</FinishBuy>
    </OpenContainer>
  );
}
