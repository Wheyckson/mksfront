import { Skeleton } from "@radix-ui/themes/dist/esm/components/skeleton.js";

import { Flex, Text } from "@radix-ui/themes";
import { CardContainer, Container } from "./styles";

export function SkeletonCard() {
  return (
    <>
      <Container>
        <CardContainer>
          <Skeleton width={"100%"} height={"138px"} />

          <Flex justify={"between"} gap={"8"}>
            <Skeleton width={"150px"} height={"40px"} />
            <Skeleton width={"100px"} height={"40px"} />
          </Flex>

          <Skeleton width={"100%"} height={"30px"} />

          <Skeleton width={"100%"} height={"40px"} />
        </CardContainer>
      </Container>
    </>
  );
}
