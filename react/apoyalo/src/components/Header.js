import React, { Component } from 'react';
    
    
class Header extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return <header>Mi nombre es {firstName} {lastName}.</header>;
    }
}
    
export default Header;