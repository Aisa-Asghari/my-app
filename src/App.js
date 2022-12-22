import { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    var auth = {
      method: "GET",
    };
    fetch("https://random-d.uk/api/random", auth)
      .then((result) => result.json())
      .then((data) => setResponse(data));
  }, []);

  return (
    <div className="App">
      <Container className="d-flex justify-content-center">
        <Row className="p-5 w-50 h-50">
          <Card>
            <Card.Img src={response.url} className="p-5 img-fluid" />
            <Card.Body>
              <Card.Title className="p-4 text-center">
                {response.message}
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
