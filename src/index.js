import React, { Component } from 'react'
import SwipePlayer from './SwipePlayer'
import image_1 from './assets/1.jpg'
import image_2 from './assets/2.jpg'
import image_3 from './assets/3.jpg'

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
