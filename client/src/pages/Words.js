import React from 'react';
import API from '../utils/API';
// import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import { List, WordCard } from '../components/List';
import { NewWordForm, UpdateWordForm } from '../components/Form';

class Words extends React.Component {
    // setting initial state
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            wordObject: {},
            updating: false,
            currentWord: {},
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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
        const { words, currentWord, updating } = this.state;

        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>My Words</Jumbotron>
                        <Row>
                            {words.length ? (
                                <List>
                                    {words.map((word) => (
                                        <WordCard
                                            key={word._id}
                                            word={word}
                                            handleDelete={this.handleDelete.bind(
                                                null,
                                                word._id,
                                            )}
                                            handleUpdate={this.handleUpdate.bind(
                                                null,
                                                word._id,
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <div className="mx-auto">
                                    <h3>You have not added any words</h3>
                                </div>
                            )}
                        </Row>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            {updating ? currentWord.name : 'Add New Word'}
                        </Jumbotron>
                        <Row>
                            <Col size="md-12 sm-12">
                                {this.renderWordForm()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

    // render functions
    renderWordForm() {
        const { updating } = this.state;
        if (updating) {
            return (
                <UpdateWordForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    wordObject={this.state.wordObject}
                />
            );
        } else {
            return (
                <NewWordForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    wordObject={this.state.wordObject}
                />
            );
        }
    }

    // helper functions
    handleDelete(id) {
        API.deleteWord(id).then(
            API.getWords().then((res) => {
                console.log(res);
                this.loadWords();
            }),
        );
    }

    handleUpdate(id) {
        console.log(id);
        API.getWord(id).then((res) => {
            // console.log(res.data);
            this.setState((state) => {
                return { updating: true, currentWord: res.data };
            });
        });
        console.log('State', this.state);
    }

    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState((prevState) => {
            let word = prevState.wordObject; // creating copy of state variable word

            word[name] = value; // update the name property, assign a new value
            return { wordObject: word }; // return new object word object
        });

        console.log('state', this.state);
    }

    // When the form is submitted, use the API.saveWord method to save the word data
    // Then reload words from the database
    handleFormSubmit(event) {
        event.preventDefault();
        const { wordObject } = this.state;
        // this.props.history.push('/words/');

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
                        this.setState(
                            { words: res.data, wordObject: {} },
                            this.cancelCourse(),
                        ),
                    ),
                )
                .catch((err) => console.log(err));
        }
    }

    loadWords() {
        API.getWords().then((res) => {
            this.setState({
                words: res.data,
            });
        });
    }

    cancelCourse() {
        document.getElementById('create-word-form').reset();
        this.setState({ wordObject: {} });
    }
}

export default Words;
