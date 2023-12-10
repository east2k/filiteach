import React from 'react'

const VideoContent = ({video}) => {
  return (
    <div className="my-5 flex flex-col">
        <video
            className="w-full h-2/3 max-h-96"
            controls
            src={video}
        />
        <h1 className="text-2xl">
            What will you learn in this part of the course?
        </h1>
        <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cupiditate, cumque quasi nemo repellendus
            assumenda alias itaque earum consequatur quas
            doloribus et nostrum adipisci voluptate, odit
            repellat, autem ducimus incidunt similique.
        </p>
    </div>
  )
}

export default VideoContent