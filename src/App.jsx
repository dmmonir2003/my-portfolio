import './App.css'
import { motion } from 'framer-motion';
import videoUrl from './assets/3D_Programming_Environment_preview.mp4';
import MainContant from './componants/MainContant';
import { SimpleCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";


function App() {


  return (
    <>

      <SimpleCursor
        size={30}
        color="#f4bb58"
        opacity={0.5}
        border="3px dotted white"
        TransitionTime={0.7}


      />
      <div className="video-background">
        <motion.video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="content">
          <div className='px-20 py-10 '>
            <MainContant></MainContant>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
