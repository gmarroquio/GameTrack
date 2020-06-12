import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import Icons from "../../components/Icon";
import {
  Container,
  GameContainer,
  Info,
  Title,
  Consoles,
  ReleaseDate,
  WrapperTop,
  WrapperBottom,
  Gradient,
  Rating,
  RatingText,
} from "./styles";
import colors from "../../styles/colors";

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
  const navigation = useNavigation();

  useEffect(() => {
    api
      .get(
        `games/lists/main?discover=true&ordering=-relevance&page=${page}&page_size=20`
      )
      .then((response) => {
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
    <TouchableOpacity
      onPress={() => navigation.navigate("Game", { game_id: item.id })}
    >
      <GameContainer
        source={{
          uri: item.background_image,
        }}
      >
        <Gradient
          colors={[colors.primary, "transparent"]}
          start={[1, 1]}
          end={[0, 0]}
        />
        <Info>
          <WrapperTop>
            <Title numberOfLines={1}>{item.name}</Title>
            <Rating rating={item.rating}>
              <RatingText rating={item.rating}>
                {item.rating.toFixed(2)}
              </RatingText>
            </Rating>
          </WrapperTop>
          <WrapperBottom>
            <Consoles>
              <Icons platforms={item.parent_platforms} size={24} />
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
        extraData={games}
      />
    </Container>
  );
};

export default Home;
