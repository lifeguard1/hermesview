import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Welcome to the 3D Worlds&nbsp;&nbsp;with {` `}
            <span className="inline-block relative">
              HermesView{" "}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            We bring your spaces to life with our immersive 3D Virtual Tours.
            Explore high-resolution environments from the comfort of your home or office.
          </p>
          <Button href="/pricing" white>
            Book a Demo
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          
            <div className="relative bg-n-8 rounded-[1rem]">

              <div
  className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"
  style={{ position: "relative" }}
>
              <iframe
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0.9rem", // Match parent's rounded corners
      zIndex: 1, // Ensure it’s above any overlapping elements
    }}
    src="https://lifeguard1.github.io/vr_1/"
    name="My First Virtual Tour"
    width="100%"
    height="100%"
    frameBorder="0"
    allowFullScreen={true}
    allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
    title="VR Tour"
  />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
