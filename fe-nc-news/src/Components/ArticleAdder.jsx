import React, { Component } from 'react'
import {Link} from "@reach/router"

export default class ArticleAdder extends Component {
    
    render() {
        return (
            <div className = "articleAdder">
                <label htmlFor="addBox"> Add new Article:</label>
                <input type = "text" id = "addBox"></input>
            </div>
        )
    }
}
