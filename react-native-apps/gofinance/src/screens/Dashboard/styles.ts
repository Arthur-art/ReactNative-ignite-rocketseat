import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import {FlatList, FlatListProps} from 'react-native';
import { DataListProps } from './Dashboard';

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

//flex: 1; para que a View ocupe todo o espaço disponível
export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(10)}px;
    background: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    margin-bottom: 16px;
`;

export const TransactionsList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
  ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: 10 },
  })``;