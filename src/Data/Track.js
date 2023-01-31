import {motion} from 'framer-motion'
import './Track.css'



function Track({track}){
    return(
        <motion.div animate = {{opacity: 1}} initial = {{opacity: 0}} exit = {{opacity: 0}}>
            <h2 className='track-title'>{track.name}</h2>
            <img className = "movie-item" src={track.img} alt=""/>
            <div className = "track-info">
                <p>{track.type}</p>
                <p>{track.date}</p>
                <p>{track.genre}</p>
            </div>

        </motion.div>
    )
}

export default Track;