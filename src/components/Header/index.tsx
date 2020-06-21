import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Title, Back } from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      {navigation.canGoBack() ? (
        <Back onPress={navigation.goBack}>
          <FontAwesome name="chevron-left" size={24} color="#fff" />
        </Back>
      ) : (
        <>
          <Title>Feed</Title>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <FontAwesome name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </>
      )}
    </Container>
  );
};

export default Header;
