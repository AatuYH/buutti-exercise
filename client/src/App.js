import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          <Form />
        </Col>
        <Col sm={6}>
          <List />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
