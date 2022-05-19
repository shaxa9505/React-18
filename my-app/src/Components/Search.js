import React, { Component } from 'react';

class Search extends Component {

    state = {
        search: ""
    }

    changeClick = (e) => {
        this.setState({search: e.target.value})
    }

    handleClick = (e) => {
        if(e.key === "Enter"){
            this.props.Search(this.state.search)
        }
    }



    render(props) {
        return (
            <div className="Search">
                <input 
                type="search" 
                onChange={this.changeClick} 
                value={this.state.search} 
                placeholder="Search..." 
                onKeyDown={this.handleClick}
                />
                <button className="btn_red" onClick={() => this.props.Search(this.state.search)}>Submit</button>
            </div>
        );
    }
}

export default Search;