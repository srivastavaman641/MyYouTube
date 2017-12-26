import React from 'react';

import VideoListItem from './video_list_item';


const VideoList= (props) => {
    console.log("props:" + props.videos);


    const videoListItem = props.videos.map((video) => {
        return (

            <VideoListItem key={video.etag}
                           video={video}
                           onVideoSelect = {props.onVideoSelect}/>

        )
    });

    return (
        <div className="col-md-4 list-group">
            <ul>
                {videoListItem}
            </ul>
        </div>
    );
};

export default VideoList;