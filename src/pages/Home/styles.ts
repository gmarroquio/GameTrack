import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../styles/colors";

export const Container = styled.View`
  background: #333;
  flex: 1;
  margin: 0;
  padding: 0 16px;
`;

export const GameContainer = styled.ImageBackground`
  margin: 10px auto 0;
  border: 5px solid ${colors.primary};
  border-radius: 8px;
  width: 100%;
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

export const Consoles = styled.View`
  flex-direction: row;
`;

export const Console = styled.View`
  margin: 5px 0 5px 10px;
`;

export const ReleaseDate = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 5px 0;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;

interface Rating {
  rating: number;
}

export const Rating = styled.View<Rating>`
  margin: 5px;
  padding: 5px 10px;
  border: 3px solid
    ${({ rating }) =>
      rating && rating > 4
        ? "green"
        : rating > 3
        ? "yellow"
        : rating > 2
        ? "orange"
        : "red"};
  border-radius: 8px;
`;

export const RatingText = styled.Text<Rating>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ rating }) =>
    rating && rating > 4
      ? "green"
      : rating > 3
      ? "yellow"
      : rating > 2
      ? "orange"
      : "red"};
`;
