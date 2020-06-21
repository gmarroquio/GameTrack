import React, { useEffect, useState } from "react";
import { View, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";

import api from "../../services/api";
import {
  Container,
  Image,
  Info,
  Title,
  Release,
  Consoles,
  Rating,
  RatingText,
  ImageBorder,
  Buy,
  BuyTitle,
  BuyTitleText,
  BuyButton,
  BuyLogo,
  BuyText,
} from "./styles";
import Icon from "../../components/Icon";

import Header from "../../components/Header";

interface Store {
  url: string;
  store: {
    id: number;
    name: string;
  };
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  playtime: number;
  metacritic_url: string;
  parent_platforms: Platform[];
  stores: Store[];
}

const Game: React.FC = () => {
  const route = useRoute();
  const { game_id } = route.params;
  const [game, setGame] = useState<Game>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const gameResponse = await api.get(`/games/${game_id}`);

      setGame(gameResponse.data);
      setLoading(false);
    };
    load();
  }, []);

  const handleStore = (url) => {
    Linking.openURL(url);
  };

  if (loading) return <View style={{ backgroundColor: "#333", flex: 1 }} />;
  return (
    <>
      <Header />
      <Container>
        <Title>{game.name}</Title>
        <ImageBorder>
          <Image source={{ uri: game.background_image }} />
        </ImageBorder>
        <Info>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Release>{game.released || "unknown"}</Release>
              <Consoles>
                <Icon platforms={game.parent_platforms} size={20} />
              </Consoles>
            </View>
            <Rating rating={game.rating}>
              <RatingText rating={game.rating}>
                {game.rating.toFixed(2)}
              </RatingText>
            </Rating>
          </View>
        </Info>
        <BuyTitle>
          <BuyTitleText>Where to buy</BuyTitleText>
        </BuyTitle>
        <Buy>
          {game.stores.map((store) => (
            <BuyButton
              key={String(store.store.id)}
              onPress={() => handleStore(store.url)}
            >
              <BuyText>{store.store.name}</BuyText>
            </BuyButton>
          ))}
        </Buy>
      </Container>
    </>
  );
};

export default Game;
