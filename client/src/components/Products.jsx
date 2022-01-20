import styled from "styled-components";

// *** data ***
import { popularProducts } from "../data";

// *** Component ***
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  ${"" /* Tự động xuống hàng khi không đủ khoảng trống */}
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts?.map((ele) => (
        <Product item={ele} key={ele.id} />
      ))}
    </Container>
  );
};

export default Products;
