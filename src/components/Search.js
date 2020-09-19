import React from "react";
import { Form, Container, Col, Button } from "react-bootstrap";

export default function Search(props) {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <Container>
        <Form className="mt-2">
          <Form.Row className="align-items-center">
            <Col sm={10} className="my-3">
              <Form.Control
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    props.getPokemon(search);
                    e.preventDefault();
                  }
                }}
                placeholder="Find info on Pokemon that you like"
              />
            </Col>
            <Col sm={2} className="my-3">
              <Button
                variant="outline-primary"
                block
                onClick={(e) => props.getPokemon(search)}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}
