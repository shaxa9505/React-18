import React, { Component } from 'react';
import Loading from '../Components/Loading';
import Movies from '../Components/Movies';
import Search from '../Components/Search';

class Main extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        }
    }
    
    componentDidMount() {
        fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=panda")
            .then(data => data.json())
            .then(data => {
                console.log(data.Search);
                return data
            })
            .then(data => this.setState({movies: data.Search}))
    }
    
    Search = (url) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=${url}`)
        .then(data => data.json())
        .then(data => this.setState({movies: data.Search}))
    }
    

    render() {
        return (
            <div className="container content">
            <Search />
            {this.state.movies.length ? <Movies movies={this.state.movies} /> : <Loading/>}  
            </div>
        );
    }
}

export default Main;