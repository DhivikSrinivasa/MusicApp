import React, { Component } from 'react';
//button class
class Button extends Component {

    render(props) {
       
        return (
            <button
                style={this.props.style}
                className={this.props.type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'}
                onClick={this.props.action} >
                {this.props.title}
            </button>

        )
    }
}
export default Button;