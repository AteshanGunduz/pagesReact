



const Video = ({handleClick, video}) => {




  return (
 <div className="container">
    <div>
        <h2>Video Player</h2>
    </div>
    <div className="quote-container">
        <div className="input-container2">
         <div>
        <input type="radio" name="video" id="1" value="video1" onClick={() => handleClick(1)}/>
        <label htmlFor="1">Deer In A Barn</label>
        </div>
        <div>
        <input type="radio" name="video" id="2" value="video2" onClick={() => handleClick(2)} />
        <label htmlFor="2">Koala Eating Plant</label>
        </div>
        <div>
        <input type="radio" name="video" id="3" value="video3" onClick={() => handleClick(3)} />
        <label htmlFor="3">White Tiger Resting</label>
        </div>
        <div>
        <input type="radio" name="video" id="4" value="video4" onClick={() => handleClick(4)}/>
        <label htmlFor="4">Elephants in Thailand</label>
        </div>
        </div>
        {Object.keys(video).length === 0 ? (
        <div></div>
         ) : (
         <div className="video-container">
           <video src={video.url} controls autoPlay></video>
         </div>
       )}
    </div>
</div>
  )
}
export default Video