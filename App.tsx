import "react-native-gesture-handler";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { StyleProvider, Container, Content, Button, Text } from "native-base";
import { Colors } from "react-native/Libraries/NewAppScreen";
import getTheme from "./native-base-theme/components";

const App = () => {

    const buttonPress = () =>
    {
     console.log("Press");
    };

    return (
        <StyleProvider  style={getTheme()}>

            <Container>

                <Content>

                    <Button onPress={buttonPress}>

                        <Text> Click Me</Text>

                    </Button>

                </Content>

            </Container>

        </StyleProvider>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    engine: {
        position: "absolute",
        right: 0
    },
    body: {
        backgroundColor: Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
        color: Colors.dark
    },
    highlight: {
        fontWeight: "700"
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: "600",
        padding: 4,
        paddingRight: 12,
        textAlign: "right"
    },
});

export default App;
