import VideoPlayer from "../video-player";
import PlayIcon from "@/public/assets/icons/playIcon.svg";

interface MediaCardProps {
  mediaType: "image" | "video" | "Youtube Link";
  media: any;
  href: string;
  className: any;
}

const MediaCard = ({ mediaType, media, href, className }: MediaCardProps) => {
  const getYouTubeVideoId = (url: any) => {
    // Regular expression to match YouTube video ID
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    // If there is a match, return the video ID, otherwise return null
    return match ? match[1] : null;
  };

  const renderMedia = (() => {
    switch (mediaType) {
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media?.data?.attributes?.url}
            alt={media?.data?.attributes?.alternativeText}
            className={className}
          />
        );
      case "video":
        return (
          <>
            <div className="relative">
              <video className={className} muted playsInline loop autoPlay>
                <source src={media?.attributes?.url} type="video/mp4" />
              </video>
            </div>
            <VideoPlayer iconUrl={PlayIcon} videoUrl={media?.attributes?.url} />
          </>
        );
      case "Youtube Link":
        return (
          <iframe
            className={className}
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(href)}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        );
      default:
        return null;
    }
  })();
  return <>{renderMedia}</>;
};

export default MediaCard;
