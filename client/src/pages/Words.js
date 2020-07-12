import React from 'react';
import API from '../utils/API';
// import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, FormBtn, Dropdown } from '../components/Form';

class Words extends React.Component {
    // setting initial state
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            wordObject: {},
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        API.getWords().then((res) => {
            this.setState({
                words: res.data,
            });
        });
    }

    render() {
        const { words, wordObject } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>My Words</Jumbotron>
                        <Row>
                            {words.length ? (
                                <List>
                                    {words.map((word) =>
                                        this.renderWords(word),
                                    )}
                                </List>
                            ) : (
                                <h3>You have not added any words</h3>
                            )}
                        </Row>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>Add New Word</Jumbotron>
                        <Row>
                            <Col size="md-12 sm-12">
                                <form id="create-word-form">
                                    <Input
                                        onChange={this.handleInputChange}
                                        name="name"
                                        placeholder="Word (required)"
                                    />
                                    <Input
                                        onChange={this.handleInputChange}
                                        name="definition"
                                        placeholder="Definition (required)"
                                    />
                                    <Input
                                        onChange={this.handleInputChange}
                                        name="origin"
                                        placeholder="Where did you find the word? (required)"
                                    />
                                    <Dropdown
                                        onChange={this.handleInputChange}
                                        name="partOfSpeech"
                                        placeholder="Part Of Speech (required)"
                                        required
                                    />
                                    <FormBtn
                                        disabled={
                                            !(
                                                wordObject.name &&
                                                wordObject.definition &&
                                                wordObject.partOfSpeech &&
                                                wordObject.origin
                                            )
                                        }
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit Word
                                    </FormBtn>
                                </form>
                            </Col>
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
                <Link to={'/words/' + word._id}>
                    <strong>
                        {word.name} - {word.definition}
                    </strong>
                </Link>
            </ListItem>
        );
    }

    // helper functions
    handleDelete(id) {
        console.log('id', id);
        API.deleteWord(id).then(
            API.getWords().then((res) => {
                this.setState({
                    words: res.data,
                });
            }),
        );
    }

    handleInputChange(event) {
        const { wordObject } = this.state;
        const { name, value } = event.target;

        this.setState((prevState) => {
            let word = Object.assign({}, prevState[name]); // creating copy of state variable word
            wordObject[name] = value; // update the name property, assign a new value
            return { word }; // return new object word object
        });
    }

    // When the form is submitted, use the API.saveWord method to save the word data
    // Then reload words from the database
    handleFormSubmit(event) {
        event.preventDefault();
        const { wordObject } = this.state;

        if (
            wordObject.name &&
            wordObject.definition &&
            wordObject.partOfSpeech &&
            wordObject.origin
        ) {
            API.saveWord({
                name: wordObject.name,
                definition: wordObject.definition,
                partOfSpeech: wordObject.partOfSpeech,
                origin: wordObject.origin,
            })
                .then((res) =>
                    API.getWords().then((res) =>
                        this.setState({ words: res.data }, this.cancelCourse()),
                    ),
                )
                .catch((err) => console.log(err));
        }
    }

    cancelCourse() {
        document.getElementById('create-word-form').reset();
    }
}

export default Words;
