import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.position = "On";
        this.state.color = 'grey';
    }

    flipSwitch = () => {
        console.log(this.state);
        if( this.state.position === "On" ) {
            this.setState({ position: "Off", color: 'azul' });
        } else {
            this.setState({ position: "On", color: 'rojo' });
        }
    }
    
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button onClick={this.flipSwitch}>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;
