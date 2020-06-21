import styled from "styled-components/native";
import colors from "../../styles/colors";
import Constants from "expo-constants";

export const Container = styled.ScrollView`
  flex: 1;
  background: #333;
  padding: 0 16px;
  padding: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const ImageBorder = styled.View`
  border: 5px solid ${colors.primary};
  border-radius: 8px;
`;

export const Info = styled.View`
  padding: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  padding-bottom: 9px;
`;

export const Release = styled.Text`
  color: #222;
  background: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 16px;
`;

export const Consoles = styled.View`
  flex-direction: row;
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

export const BuyTitle = styled.View`
  background: white;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
`;

export const BuyTitleText = styled.Text`
  color: ${colors.primary};
  font-size: 28px;
  font-weight: bold;
`;

export const Buy = styled.View`
  padding: 16px;
`;

export const BuyButton = styled.TouchableOpacity`
  margin-bottom: 15px;
  background: ${colors.primary};
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  justify-content: center;
`;

export const BuyText = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
`;

export const BuyLogo = styled.View``;
