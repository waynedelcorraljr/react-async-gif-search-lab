import React, {Component} from 'react';

export default class GifSearch extends Component {

    state = {
        search: ''
    }

    handleTyping = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form  onSubmit={event => this.props.handleSubmit(event, this.state.search)} >
                    <input type='text' placeholder='Type to Search' onChange={event => this.handleTyping(event)} />
                    <input type='submit' value='Search' />
                </form>
            </div>
        )
    }
}