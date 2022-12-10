import React, { Component } from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/Box.css"

class Box extends Component {

    render() {
        let { color, width, height } = this.props
        return (
            <div
                className='Box'
                style={{
                    height: `${height}px`,
                    backgroundColor: color,
                }}
            >
                <Button className='Box-button' onClick={() => this.props.removeBox(this.props.id)}>X</Button>
            </div>
        )
    }
}


export default Box;