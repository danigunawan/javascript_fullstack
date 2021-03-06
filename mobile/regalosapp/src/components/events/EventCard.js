import React from 'react';
import { withTheme, Card, Title, Paragraph, Button } from 'react-native-paper';
import styles from '../../stylesheets/login.stylesheet'

const EventCard = (props) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{props.event.title}</Title>
                <Paragraph>Fecha: {new Date(props.event.date).toLocaleDateString()}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={()=>{props.openEventScreen(props.event.id)}}>Editar</Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(EventCard)
