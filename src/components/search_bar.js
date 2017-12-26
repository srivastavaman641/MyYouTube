import React, {Component} from 'react';

const API_KEY="AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";
class SearchBar extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            term:'Sherlock'
        };
        //this.onInputChange=this.onInputChange.bind(this);
        props.onSearchTermChange(this.state.term);
    }

    onInputChange(term){
        console.log(this.state.term);
        //return 1;
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
    render(){
        return(
            <div className="search-bar">
                <input placeholder="Search"
                    value={this.state.term}
                onChange={(event)=>this.onInputChange(event.target.value)} />
            </div>
        );

    }
}

export default SearchBar;