import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";

export const Container = styled.View`
  background: #333;
  flex: 1;
`;

export const GameContainer = styled.ImageBackground`
  margin: 5px;
  border: 5px solid #17182e;
  border-radius: 8px;
  width: 98%;
  height: 200px;
  align-items: flex-end;
`;

export const Info = styled.View`
  justify-content: space-between;
  margin: 0 5px;
`;

export const WrapperTop = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const WrapperBottom = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Rating = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const Consoles = styled.View`
  flex-direction: row;
`;

export const Console = styled(SvgXml).attrs({
  height: 20,
  width: 20,
})`
  margin: 5px 0 5px 10px;
`;

export const ReleaseDate = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 5px 0;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;
