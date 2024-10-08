import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center justify-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 xl:ml-28">
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col px-40">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {" "}
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Exclusive Offer: Limited-Time Summer Deal! 🔥 Get 20% OFF on all Nike
          shoes! 🔥 Upgrade your style and comfort with the latest arrivals.
          Hurry! This offer won’t last long – grab your favorites before they’re
          gone.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer