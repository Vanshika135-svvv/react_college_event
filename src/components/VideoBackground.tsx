const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full video-overlay z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source
          src="https://cdn.pixabay.com/video/2021/10/20/92680-637275034_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
