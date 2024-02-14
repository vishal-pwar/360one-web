"use client";
import PlayIcon from "@/public/assets/icons/playIcon.svg";
import VideoPLayer from "../video-player";
interface MediaCardProps {
  mediaType: "image" | "video" | "youtube_link";
  media: any;
  thumbnail: any;
  href: string;
  className: any;
}

const MediaCard = ({
  mediaType,
  media,
  href,
  thumbnail,
  className,
}: MediaCardProps) => {
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
          <div className="relative flex items-center justify-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnail?.data?.attributes?.url}
                alt={thumbnail?.data?.attributes?.alternativeText}
                className={className}
              />
            </div>
            <VideoPLayer
              iconUrl={PlayIcon}
              videoUrl={media?.data?.attributes?.url}
            />
          </div>
        );
      case "youtube_link":
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
