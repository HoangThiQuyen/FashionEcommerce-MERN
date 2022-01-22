import { publicRequest } from "../RequestMethod";
import { useEffect, useState } from "react";
import styled from "styled-components";

// *** Component ***
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  ${"" /* Tự động xuống hàng khi không đủ khoảng trống */}
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category ? `/product?categories=${category}` : `/product`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((ele) =>
          // a: "data" => "a:data"
          Object.entries(filter).every(([key, value]) =>
            ele[key].includes(value)
          )
        )
      );
  }, [category, filter, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((products) =>
        [...products].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((products) =>
        [...products].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterProducts((products) =>
        [...products].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filterProducts?.map((ele) => <Product item={ele} key={ele._id} />)
        : products
            ?.slice(0, 8)
            .map((ele) => <Product item={ele} key={ele._id} />)}
    </Container>
  );
};

export default Products;
