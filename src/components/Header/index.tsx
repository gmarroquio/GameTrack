import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Wrapper, Title } from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Wrapper>
        <Title>Feed</Title>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <FontAwesome name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
};

export default Header;
