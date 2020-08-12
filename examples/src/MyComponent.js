import React, { Component } from 'react'
import SwipePlayer from '../../src/SwipePlayer'
import image_1 from '../../src/assets/1.jpg'
import image_2 from '../../src/assets/2.jpg'
import image_3 from '../../src/assets/3.jpg'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [image_1, image_2, image_3]
        }
    }

    render() {
        return (
            <div>
                <SwipePlayer images={this.state.images}></SwipePlayer>
            </div>
        )
    }
}
