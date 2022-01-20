import styled from "styled-components";

// *** components
import CategoryItem from "./CategoryItem";
import { mobile } from "../reponsive";

// *** data
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories?.map((ele) => (
        <CategoryItem key={ele.id} item={ele} />
      ))}
    </Container>
  );
};

export default Categories;
