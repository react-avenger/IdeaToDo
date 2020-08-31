import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
           navigation.navigate("DreamList")
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.mainContainer}>
            <Image source={require('../assets/ic_idea.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:
    {
        backgroundColor: "#ffffff",
        flex: 1,
        alignItems:"center",
        justifyContent :'center'
    },
    image: {
        justifyContent: "center",
        alignSelf: 'center',
        height: 200,
        width: 200,
    }
});