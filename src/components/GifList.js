import React, {Component} from 'react';

export default class GifList extends Component {
    render() {
        return(
            <ul>
                {this.props.gifs.map(url => <li  key={url}><img src={url} alt={url} /></li>)}
            </ul>
        )
    }
}