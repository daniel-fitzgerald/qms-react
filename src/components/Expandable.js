import React, { Component } from 'react'

import './expandable.css'

class Expandable extends Component {
    state = {
        expanded: false
    }

    handleClick = () => {
        const { expanded } = this.state

        this.setState((prevState, props) => ({
            expanded: !expanded
        }))
    }

    render() {
        const { expanded } = this.state
        const { label, children } = this.props

        return <div className="collapsefaq">
            <h3 className={`trigger${expanded ? ' expanded' : ''}`}>
                <a onClick={this.handleClick}>{label}</a>
            </h3>
            {expanded &&
            <div className="collapsefaq-content">
                {children}
            </div>}
        </div>
    }
}

export default Expandable