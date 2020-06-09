import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import api from "../../services/api";

import pc from "../../assets/windows.svg";
import ps from "../../assets/playstation.svg";
import xbox from "../../assets/xbox.svg";

import {
  Container,
  GameContainer,
  Info,
  Title,
  Rating,
  Consoles,
  Console,
  ReleaseDate,
  WrapperTop,
  WrapperBottom,
  Gradient,
} from "./styles";

interface Game {
  id: number;
  name: string;
  rating: number;
  parent_platforms: Array<Platform>;
  released: string;
  background_image: string;
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    api.get("games?page_size=20").then((response) => {
      const data = response.data.results.map((game: Game) => ({
        id: game.id,
        name: game.name,
        rating: game.rating,
        parent_platforms: game.parent_platforms,
        released: game.released,
        background_image: game.background_image,
      }));
      setGames(data);
    });
  }, []);

  const renderGames = ({ item }: { item: Game }) => (
    <TouchableOpacity>
      <GameContainer
        source={{
          uri: item.background_image,
        }}
      >
        <Gradient
          colors={["#17182e", "transparent"]}
          start={[1, 1]}
          end={[0, 0]}
        />
        <Info>
          <WrapperTop>
            <Title>{item.name}</Title>
            <Rating>
              <FontAwesome name="star" size={16} color="yellow" />
              <FontAwesome name="star" size={16} color="yellow" />
              <FontAwesome name="star" size={16} color="yellow" />
              <FontAwesome name="star-half-empty" size={16} color="yellow" />
              <FontAwesome name="star-o" size={16} color="yellow" />
            </Rating>
          </WrapperTop>
          <WrapperBottom>
            <Consoles>
              {/* Fazer o map pegando os consoles */}
              <Console xml={pc} />
              <Console xml={ps} />
              <Console xml={xbox} />
              {/* {item.parent_platforms.map(({ platform }) => (
              ))} */}
            </Consoles>
            <ReleaseDate>{item.released}</ReleaseDate>
          </WrapperBottom>
        </Info>
      </GameContainer>
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderGames}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
