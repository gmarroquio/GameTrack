import React from "react";
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
  name: string;
  size: number;
}

const Icon: React.FC<Icon> = ({ name, size }) => {
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

  return <SvgXml xml={logo[name]} height={size} width={size} />;
};

export default Icon;
