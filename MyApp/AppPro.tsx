import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme

} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme()==='dark'
    return(
       <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText:styles.whiteText}>hello world</Text>
        <Text>hello bro</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro