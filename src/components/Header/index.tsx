import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Wrapper, Title } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Feed</Title>
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
};

export default Header;
