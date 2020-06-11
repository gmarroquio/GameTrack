import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import api from "../../services/api";
import { Container } from "./styles";

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

  if (loading) return <View style={{ backgroundColor: "#333", flex: 1 }} />;
  return (
    <Container>
      <Text>{game.name}</Text>
    </Container>
  );
};

export default Game;
