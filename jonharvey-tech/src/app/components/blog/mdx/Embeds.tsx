type YouTubeVidProps = {
    videoId: string; // YouTube video ID (e.g., "H7lLnj1xyfo")
    title?: string;  // Optional: Title for accessibility
  };
  
  export const YouTubeVid = ({ videoId, title = "YouTube video player" }: YouTubeVidProps) => {
    return (
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };