import { useState } from "react"
import Video from "./Video"
import videoData from "./VideoData"




const App = () => {
  const [videos, setVideos] = useState(videoData)
  const [vidi, setVidi] = useState({})

  const handleClick = (id)=>{
    const theVideo = videos.filter((video) => video.id === id);
    setVidi(...theVideo);
  }

  console.log(vidi);




  return (

     <div className="bigbox">
     <Video handleClick={handleClick} video={vidi}/>
    </div>
   
  )
}
export default App