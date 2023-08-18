import PledgeSlider from "../pledge-slider";

const PledgeSection = () => {
  return (
    <section>
      <div className="p-[calc(48*var(--scale))calc(126*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex gap-[calc(77*var(--scale))] justify-between">
          <div className="w-[calc(474*var(--scale))]">
            <h2 className="text-[calc(1*var(--size-38))] mb-[calc(8*var(--scale))] whitespace-nowrap font-bold">
              THE 360 ONE Foundation
            </h2>
            <p className="flex flex-col leading-[1.65] text-[calc(1*var(--size-20))]">
              Just as our approach to managing money is revolutionizing the
              Indian wealth and asset management industry, our responsibility
              towards society, too, follows an innovative approach delivering
              exponential impact. As leaders in the financial sector, we believe
              in leveraging our core competencies and expertise. We re-imagined
              traditional grant-giving and evolved a more catalytic approach to
              deploying CSR funds to generate a higher social return and
              leverage by unlocking further capital, recycling funds, and a
              strong focus on outcomes. We vetted and co-curated interventions
              that use innovative or blended finance approaches that enable a
              multiplier effect to every contribution.
              <span className="mt-[20px]">
                <strong>Impact:</strong> We are committed to providing better
                access and greater ownership as we go forward.
              </span>
            </p>
          </div>
          <PledgeSlider />
        </div>
      </div>
    </section>
  );
};

export default PledgeSection;
