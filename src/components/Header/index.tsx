import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, Title, Filter, Search } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Filter>
        <Feather name="filter" size={24} color="white" />
      </Filter>
      <Title>Game Track</Title>
      <Search>
        <Feather name="search" size={24} color="white" />
      </Search>
    </Container>
  );
};

export default Header;
