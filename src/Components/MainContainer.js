import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    
    const Movie = useSelector((store)=> store.Movie?.nowPlayingMovies)
    
    if(!Movie) return

    const {title,overview} = Movie[0]
    return(
        <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground/>
        </div>
    )
}

export default MainContainer