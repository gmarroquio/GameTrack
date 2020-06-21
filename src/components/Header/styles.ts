import styled from "styled-components/native";
import Constants from "expo-constants";
import colors from "../../styles/colors";

export const Container = styled.View`
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 20px;
  background: ${colors.primary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const Back = styled.TouchableOpacity`
  /* display: none; */
  flex-direction: row;
  /* align-items: center;
  justify-content: center; */
`;

export const BackText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
`;
