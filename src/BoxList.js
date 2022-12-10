import React, { Component } from 'react'
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";
import "./Styles/BoxList.css"

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { height: 100, color: "blue", id: 1 },
                { height: 100, color: "yellow", id: 2 },
                { height: 100, color: "blue", id: 3 },
                { height: 100, color: "yellow", id: 4 },
                { height: 100, color: "blue", id: 5 }
            ]
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this)
    }
    addBox(box) {
        this.setState(st => ({
            boxes: [...st.boxes, box]
        }))
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() {
        return (
            <div className='BoxList'>
                <NewBoxForm addBox={this.addBox} />
                <div className='BoxList-boxContainer'>
                    {this.state.boxes.map(box => (
                        <Box
                            id={box.id}
                            key={box.id}
                            color={box.color}
                            height={box.height}
                            removeBox={this.removeBox} />
                    ))}
                </div>
            </div>

        )
    }
}
export default BoxList