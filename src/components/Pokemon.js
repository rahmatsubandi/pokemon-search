import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export default function Pokemon(props) {
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Col xs={12} md={6} className="mt-2">
          <Card className="shadow-sm">
            <Card.Header>
              <h4 className="text-center text-capitalize">{props.name}</h4>
            </Card.Header>
            <Card.Body>
              <img src={props.sprite} alt={props.name} />
              <img src={props.sprite_back} alt={props.name_back} />
              <img src={props.sprite_shiny} alt={props.name_shiny} />
              <img src={props.sprite_back_shiny} alt={props.name_back_shiny} />
              <h5>Abilities: </h5>
              {props.abilities.map((ability, key) => (
                <li key={key}>{ability.ability.name}</li>
              ))}
              <h5>Types</h5>
              {props.types.map((type, key) => (
                <div key={key}>
                  <li>{type.type.name}</li>
                </div>
              ))}
              <h5>Weight :{props.weight}</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <Card className="shadow">
            <Card.Header>
              <h4 className="text-center">Base Status</h4>
            </Card.Header>
            <Card.Body>
              {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{stat.stat.name}</strong>
                  <ProgressBar
                    now={stat.base_stat}
                    max={200}
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
