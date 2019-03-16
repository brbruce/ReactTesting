import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    };
    
    render() {
        return (
            <div className="container">
                <Table 
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter} 
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>        
        );

    }

    removeCharacter = index => {
        const { characters } = this.state; // Get the 'characters' property from state and assign it to a variable with the same name.
    
        this.setState({
            characters: characters.filter((character, i) => { // filter creates a new array with all elements except ones which don't match the filter.
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]}); // ES6 Spread operator.  Add each character in characters into a new array, and add the new character to the end.
    }
}

export default App;
