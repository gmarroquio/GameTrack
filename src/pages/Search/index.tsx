import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import api from "../../services/api";

import Header from "../../components/Header";

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
  TextInput,
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

const Search: React.FC = () => {
  // @refresh reset
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    api
      .get("games", {
        cancelToken: source.token,
        params: {
          search: String(search),
          ordering: "-rating",
          page: String(page),
          page_size: String(10),
        },
      })
      .then((response) => {
        if (!unmounted) {
          const data = response.data.results.map((game: Game) => ({
            id: game.id,
            name: game.name,
            rating: game.rating,
            parent_platforms: game.parent_platforms,
            released: game.released,
            background_image: game.background_image,
          }));
          setGames([...games, ...data]);
        }
      });

    return function () {
      unmounted = true;
      source.cancel("Cancelled");
    };
  }, [page]);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    api
      .get("games", {
        cancelToken: source.token,
        params: {
          search: String(search),
          ordering: "-rating",
          page: String(page),
          page_size: String(10),
        },
      })
      .then((response) => {
        const data = response.data.results.map((game: Game) => ({
          id: game.id,
          name: game.name,
          rating: game.rating,
          parent_platforms: game.parent_platforms,
          released: game.released,
          background_image: game.background_image,
        }));
        setGames([...data]);
      });

    return function () {
      unmounted = true;
      source.cancel("Cancelled");
    };
  }, [search]);

  const handleSearch = (e: string) => {
    setSearch(e);
  };

  const renderGames = ({ item }: { item: Game }) =>
    item ? (
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
              <ReleaseDate>{item.released || "unknown"}</ReleaseDate>
            </WrapperBottom>
          </Info>
        </GameContainer>
      </TouchableOpacity>
    ) : (
      <View />
    );

  return (
    <>
      <Header />
      <Container>
        <TextInput onChangeText={handleSearch} autoFocus />
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
    </>
  );
};

export default Search;
