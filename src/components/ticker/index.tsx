"use client";
interface TickerProps {
  ticker: any;
}
const Ticker = (props: TickerProps) => {
  const { ticker } = props;

  return (
    <div className="text-white z-40 fixed top-0 bg-black w-full">
      <div className="relative flex overflow-x-hidden">
        <div className="py-3 animate-marquee whitespace-nowrap hover:pause">
          <span className="text-2xl mx-4">Marquee Item 1</span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
