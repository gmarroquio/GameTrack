import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, Title, Menu, Wrapper, Filter, Search } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Feather name="menu" size={30} color="white" />
        </Menu>
        <Title>Games</Title>
      </Wrapper>
      <Wrapper>
        <Filter>
          <Feather name="filter" size={24} color="white" />
        </Filter>
        <Search>
          <Feather name="search" size={24} color="white" />
        </Search>
      </Wrapper>
    </Container>
  );
};

export default Header;
