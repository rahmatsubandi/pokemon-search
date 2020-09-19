import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export default function Pokemon(props) {
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Col xs={12} md={6} className="mt-2">
          <Card>
            <Card.Header>
              <h5>Name: {props.name}</h5>
            </Card.Header>
            <Card.Body>
              <img src={props.sprite} alt={props.name} />
              <img src={props.sprite_front} alt={props.name_front} />
              <h5>Abilities</h5>
              {props.abilities.map((ability, key) => (
                <div key={key}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
              <h5>Types</h5>
              {props.types.map((type, key) => (
                <div key={key}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <Card>
            <Card.Body>
              <h4>Base Status:</h4>
              {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{stat.stat.name}</strong>
                  <ProgressBar
                    now={stat.base_stat}
                    max={255}
                    label={stat.base_stat}
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
