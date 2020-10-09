import React from 'react';
import VtbLogo from '../../Icons/Vtb-logo';
import { Header } from 'react-native-elements';

const Head = () => {
    return (
        <Header
            leftComponent={<VtbLogo/>}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            onPress={() => {console.warn("logo pressed")}}
            />
    )
}

export default Head;
