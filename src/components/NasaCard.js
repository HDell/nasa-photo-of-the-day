import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';

const NasaCard = (props) => {

    return (
        <Col sm={{ size: 6, order: 2, offset: 1 }}>
            <Card>
                <CardImg src={props.hdurl}/>
                <CardBody>
                    <CardTitle>Title: {props.title}</CardTitle>
                    <CardSubtitle>Date: {props.date}</CardSubtitle>
                    <CardText>Description: {props.explanation}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default NasaCard;