import React from "react";

import { Container } from "./styles";
import Icons from "../../components/Icon";

const Genres: React.FC = () => (
  <Container>
    <Icons
      platforms={[
        { platform: { id: 2, name: "linux", slug: "pc" } },
        { platform: { id: 3, name: "linux", slug: "linux" } },
        { platform: { id: 4, name: "linux", slug: "playstation" } },
      ]}
      size={50}
    />
  </Container>
);

export default Genres;
