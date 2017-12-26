import React from 'react'

const Video=(props)=>{
    if(!props.CurrentVideo){
        return(
            <p>Loading..</p>
        );
    }
    const url=`https://www.youtube.com/embed/${props.CurrentVideo.id.videoId}`;
    return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"
                      src={url} allowFullScreen>
                </iframe>
                </div>
            <div className="details">
                <div><h1>{props.CurrentVideo.snippet.title}</h1></div>
                <div>{props.CurrentVideo.snippet.description}</div>
            </div>
            </div>
    );
};
export default Video;