"use client";
import Link from "next/link";
interface TickerProps {
  ticker: any;
}
const Ticker = (props: TickerProps) => {
  const { ticker } = props;

  return (
    <div className="text-white z-40 fixed top-0 bg-black w-full">
      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee whitespace-nowrap hover:pause">
          {ticker?.attributes?.href.length > 0 ? (
            <Link
              href={ticker.attributes.href}
              className="text-base mx-4 cursor-pointer hover:underline"
              target={ticker.attributes.external ? "_blank" : "_self"}
            >
              {ticker.attributes.title}
            </Link>
          ) : (
            <span className="text-2xl mx-4">{ticker.attributes.title}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
