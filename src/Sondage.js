import React, { Component } from 'react';

const Sondages = [
    {
        id: '12d43lfi',
        category: 'Nutrition',
        subject: 'Quelle est votre pâte à tartiner préférée ?',
        answers: [
            {
                id: 1,
                text: 'Nutella',
                stat: 10234
            },
            {
                id: 2,
                text: 'Poulain',
                stat: 2139
            },
            {
                id: 3,
                text: 'Kebab',
                stat: 2
            }
        ],
        stat: 12375
    }
];

export class Sondage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sondage: Sondages.find((sondage) => (sondage.id === props.id)),
            showChoices: true
        }
    }

    selectChoice(id) {
        this.setState({ showChoices: false });
    }

    choices() {
        let element = (
            <p>Merci pour votre vote !</p>
        );
        if (this.state.showChoices) {
            element = (
                <ul>
                    {this.state.sondage.answers.map((answer) =>
                        <li><button onClick={this.selectChoice.bind(this, answer.id)}>{answer.text} ({answer.stat} votes)</button></li>
                    )}
                </ul>
            );
        }
        return element;
    }

    render() {
        return (
            <div>
                <h2>Catégorie: {this.state.sondage.category}</h2>
                <h3>{this.state.sondage.subject} ({this.state.sondage.stat} votes)</h3>
                {this.choices()}
            </div>
        );
    }
}