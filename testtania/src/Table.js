import React, {Component} from 'react';

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props; // Get the 'characters' property from state and assign it to a variable with the same name.

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

// Simple component - Just a function
const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

// Simple component - Just a function
const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default Table;
