import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function CityInput({ city, setCity, fetchData }) {
  const [err, setErr] = useState("");

  const handleClick = (event) => {
    setCity(event.target.value);
  };
  const handleError = () => {
    if (city) {
      setErr("");
      fetchData();
    } else {
      setErr("Name cannot be empty");
    }
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter City Name</Form.Label>
            <Form.Control
              onChange={handleClick}
              type="text"
              placeholder="Enter city name"
            />
          </Form.Group>
          <p>{err}</p>
          <Button onClick={handleError} variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
