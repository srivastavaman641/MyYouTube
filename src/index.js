import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import Video from './components/video_detail.js';

const API_KEY = "AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    videoSearch(term) {

        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos, selectedVideo: videos[0]});
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <div className="player"><h1>MyYouTube</h1>
                <SearchBar onSearchTermChange={videoSearch}/>
                </div>
                <Video CurrentVideo={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={(video) => {
                               this.setState({selectedVideo: video})
                           }}/>

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));