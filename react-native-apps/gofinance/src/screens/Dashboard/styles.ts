import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)};
    background: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding-right: ${RFValue(24)}px;
    padding-left: ${RFValue(24)}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserInfo = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;    
    border-radius: ${RFValue(10)}px;
`;

export const User = styled.View`
    margin-left: ${RFValue(17)}px;
    
`;

export const UserGreating = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.medium};
`;

export const UserName = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const HighlightCards = styled.ScrollView.attrs({
    contentContainerStyle: {paddingLeft: 24},
    showsHorizontalScrollIndicator: false,
    horizontal: true
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;