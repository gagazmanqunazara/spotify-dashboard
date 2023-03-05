import { SignInHero } from "./Auth";
import Button from "./Button";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="w-full hero-background dark:hero-background-dark min-h-screen">
      <Header />
      <div className="max-w-[100rem] mx-auto">
        <div className="p-6 flex items-center gap-10 mt-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">
              Unleash Your Music Potential with Our{" "}
              <span className="text-primary whitespace-nowrap">
                Spotify Dashboard
              </span>
            </h1>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
              Not a really spotify dashboard, developed for do cool stuff using
              many tech stacks and also the spotify API that combined with fake
              data 🔥
            </p>
            <div className="flex flex-col gap-3 mt-8">
              <SignInHero />
              <Button type="secondary" icon="github">
                Github Repository
              </Button>
            </div>
          </div>
          <img
            src="/images/hero.png"
            alt="Hero Section Image"
            className="w-[45rem]"
          />
        </div>
        <img
          src="/images/dashboard.png"
          alt="Dashboard Example"
          className="w-full mt-15 border border-primary rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
