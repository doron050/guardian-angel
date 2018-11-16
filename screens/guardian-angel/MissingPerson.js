import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Section from "../../components/Section";

export default function MissingPerson({lostPerson, goToLostPerson}) {
    return (
        <Section>
            <View style={styles.missingPersonContainer}>
                <View style={styles.infoContainer}>
                    <Text>
                        <Text>{lostPerson.name},</Text> <Text>{lostPerson.goToLostPerson} miles</Text>
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="I'm On My Way" onPress={() => goToLostPerson(lostPerson.id)} color={"#d66a00"}/>
                </View>
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    missingPersonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    infoContainer: {
        justifyContent: "space-around"
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
});

