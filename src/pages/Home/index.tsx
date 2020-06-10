import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Icons from "../../components/Icon";

import api from "../../services/api";

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
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`games?page=${page}&page_size=20`).then((response) => {
      const data = response.data.results.map((game: Game) => ({
        id: game.id,
        name: game.name,
        rating: game.rating,
        parent_platforms: game.parent_platforms,
        released: game.released,
        background_image: game.background_image,
      }));
      setGames([...games, ...data]);
    });
  }, [page]);

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
              <Icons platforms={item.parent_platforms} size={20} />
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
        onEndReachedThreshold={0.5}
        onEndReached={() => setPage(page + 1)}
      />
    </Container>
  );
};

export default Home;
