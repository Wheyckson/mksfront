import {
  ButtonBuy,
  CardContainer,
  Container,
  ContentWrapper,
  Description,
} from "@/styles/pages/home";
import Head from "next/head";
import Image from "next/image";

import { ShoppingBagOpen } from "@phosphor-icons/react";

import { api } from "@/api/axios";
import { SkeletonCard } from "@/component/SkeletonCard";
import { valueFormatter } from "@/utils/price-formatter";
import { useQuery } from "@tanstack/react-query";
import { ProductsProps } from "@/context/CartProvider";
import { useCart } from "@/hooks/useCart";

const skeletonProductsArray = Array.from({ length: 8 }, (_, i) => i);

const getProducts = async () => {
  const response = await api.get<ProductsProps>(
    "/products?page=1&rows=8&sortBy=id&orderBy=DESC"
  );

  return response.data;
};

export default function Home() {
  const { addToCart, checkProductAlreadyInCart } = useCart();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <Head>
        <title>Home | MKS Shop</title>
      </Head>

      <Container>
        {isLoading ? (
          <>
            {skeletonProductsArray.map((item) => {
              return <SkeletonCard key={item} />;
            })}
          </>
        ) : (
          <>
            {data?.products.map((item) => {
              return (
                <CardContainer key={item.id}>
                  <ContentWrapper>
                    <Image
                      src={item.photo}
                      width={130}
                      height={138}
                      alt="imagem do produto"
                    />

                    <div>
                      <em>{item.name}</em>
                      <span> {valueFormatter(Number(item.price))} </span>
                    </div>

                    <Description>{item.description}</Description>
                  </ContentWrapper>

                  <ButtonBuy
                    onClick={() => addToCart(item)}
                    disabled={checkProductAlreadyInCart(item.id)}
                  >
                    <ShoppingBagOpen size={22} />
                    <span>COMPRAR</span>
                  </ButtonBuy>
                </CardContainer>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
}
