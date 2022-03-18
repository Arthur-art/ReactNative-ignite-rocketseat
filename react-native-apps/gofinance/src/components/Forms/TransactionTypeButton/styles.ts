import styled, { css } from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface IconProps {
    type: 'up' | 'down';
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<IconProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    padding: 20px 0px;
    justify-content: center;
    ${({ isActive, type }) => isActive && type === 'up' && css`
        background: ${({ theme }) => theme.colors.success_light};`}
    ${({ isActive, type }) => isActive && type === 'down' && css`
        background: ${({ theme }) => theme.colors.attention_light};`}
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({type, theme}) => type === 'up' ? theme.colors.success : theme.colors.attention};
    opacity: ${({isActive}) => isActive ? 1 : 0.2};
`;