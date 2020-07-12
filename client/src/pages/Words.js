import React from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Words extends React.Component {
  // setting initial state
  constructor(props) {
    super(props);

    this.state = {
      words: [],
    };
  }

  componentDidMount() {
    API.getWords().then((res) => {
      this.setState({
        words: res.data,
      });
    });
  }

  render() {
    const { words } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>My Words</Jumbotron>
            <Row>
              {words.length ? (
                <List>{words.map((word) => this.renderWords(word))}</List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Row>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>My Words</Jumbotron>
            <Row>
              {words.length ? (
                <List>{words.map((word) => this.renderWords(word))}</List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    );
  }

  // render methods
  renderWords(word) {
    return (
      <ListItem
        key={word._id}
        id={word._id}
        handleDelete={this.handleDelete.bind(null, word._id)}
      >
        <Link to={"/words/" + word._id}>
          <strong>
            {word.name} - {word.definition}
          </strong>
        </Link>
      </ListItem>
    );
  }

  // helper functions
  handleDelete(id) {
    console.log("id", id);
    API.deleteWord(id).then(
      API.getWords().then((res) => {
        this.setState({
          words: res.data,
        });
      })
    );
  }
}

export default Words;
