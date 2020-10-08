import React from 'react';
import VtbLogo from '../../Icons/Vtb-logo';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Head = () => {
    return (
        <Header
            leftComponent={<VtbLogo
                onPress={() => {console.warn("logo pressed")}}/>}
            />
    )
}


export default Head;
