import React from "react";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";

import pc from "../../assets/pc.svg";
import playstation from "../../assets/playstation.svg";
import xbox from "../../assets/xbox.svg";
import ios from "../../assets/ios.svg";
import android from "../../assets/android.svg";
import mac from "../../assets/mac.svg";
import linux from "../../assets/linux.svg";
import nintendo from "../../assets/nintendo.svg";
import atari from "../../assets/atari.svg";
import commodore_amiga from "../../assets/commodore-amiga.svg";
import sega from "../../assets/sega.svg";
import tdo from "../../assets/3do.svg";
import neo_geo from "../../assets/neo-geo.svg";
import web from "../../assets/web.svg";

interface Icon {
  platforms: Platform[];
  size: number;
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

const Icon: React.FC<Icon> = ({ platforms, size }) => {
  const logo = {
    pc,
    playstation,
    xbox,
    ios,
    android,
    mac,
    linux,
    nintendo,
    atari,
    "commodore-amiga": commodore_amiga,
    sega,
    "3d0": tdo,
    "neo-geo": neo_geo,
    web,
  };

  if (platforms)
    return platforms.map(({ platform }) => (
      <SvgXml
        style={{ marginBottom: 10, marginRight: 5 }}
        key={String(platform.id)}
        xml={logo[platform.slug]}
        height={size}
        width={size}
      />
    ));
  else {
    return <Text>UNKNOWN</Text>;
  }
};

export default Icon;
