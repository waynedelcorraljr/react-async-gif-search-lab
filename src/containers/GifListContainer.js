import React, {Component} from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleSubmit = (event, search) => {
        event.preventDefault()
            fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=vLsDFHvWYQy0G0zU5LJe0o2KNEgSVy2N`)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    gifs: data.data.map(gif => gif.images.original.url)
                })
            })
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <GifSearch handleTyping={this.handleTyping} handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} /> 
            </div>
        )
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=vLsDFHvWYQy0G0zU5LJe0o2KNEgSVy2N`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            this.setState({
                gifs: data.data.map(gif => gif.images.original.url)
            })
        })
       
    }
}