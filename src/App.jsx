import { useEffect, useRef } from "react";
import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Welcome to College unBound
// Where “higher education” meets its match—and your wallet stays way closer to home.

// Why Pay Them When You Can Pay You?
// College unBound is here to revolutionize education—by cutting out the middleman (ahem, college) and putting the “investment” where it truly belongs: in your pocket. Why pour tens of thousands into an institution that teaches you how to be broke when you could just skip straight to the broke part—while keeping the cash?

// The Ultimate Degree in Life Skills™
// We offer a self-directed, totally unaccredited, 100% parent-funded program that empowers you to pretend you&apos;re enrolled while doing literally anything else. And we don’t just mean staying home and playing video games (unless that’s your major).

// At College unBound, your coursework is whatever you decide:

// World Travel 101: Backpack across Europe under the guise of “studying abroad.”
// Startup Entrepreneurship: Finally launch that Etsy store or garage band.
// Netflixology: A deep dive into film and procrastination studies.
// Meanwhile, your parents happily pay “tuition,” aka your rent, hobbies, and streaming subscriptions.

// Accreditation? Who Needs It?
// Let’s face it: the diploma mill isn’t really about learning—it’s about looking busy for four years while you rack up debt. We cut through the red tape and give you the authentic college experience: ramen noodles, existential crises, and vague plans for the future. All without the crushing loans!

// How It Works:
// Convince Your Parents: Our foolproof guide helps you craft a totally believable fake college plan. “Virtual classes,” “independent study,” “professor-approved internships”—we’ve got the buzzwords covered.
// Receive “Tuition”: Your parents send you their hard-earned money, thinking you’re investing in your future. Joke’s on them—it’s already here.
// Live Your Best Life: Take control of your education, your finances, and your sleep schedule. No pop quizzes—just pop champagne.
// College unBound: Education, Evolved
// So stop wasting time memorizing useless facts or pretending to care about group projects. It’s time to get unBound and make higher education work for you. Because let’s be real: if college is a scam, it might as well be your scam.

// Sign up today. Or don’t. We don’t care—it’s your life.

function App() {
  const bg = useRef(null);
  const centerLogo = useRef(null);
  const centerText = useRef(null);

  const middleManContainer = useRef(null);
  const middleManText = useRef(null);

  const stepsContainer = useRef(null);
  const steps = useRef(null);

  const testimonyContainer = useRef(null);
  const testimony = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bgTl = gsap.timeline({
      scrollTrigger: {
        trigger: bg.current,
        start: "-1 top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    bgTl
      .to(centerLogo.current, {
        opacity: 0,
      })
      .to(centerText.current, {
        opacity: 1,
        duration: 1,
      });

    const middleManSplit = new SplitType(middleManText.current, {
      types: "chars, words",
    });

    const middleManTl = gsap.timeline({
      scrollTrigger: {
        trigger: middleManContainer.current,
        start: "top center",
        end: "center center-=100",
        scrub: true,
      },
    });

    middleManTl.from(middleManSplit.chars, {
      opacity: 0.2,
      stagger: 0.1,
    });

    const stepsTl = gsap.timeline({
      scrollTrigger: {
        trigger: stepsContainer.current,
        start: "top top",
        end: "+=" + window.innerHeight * 4,
        scrub: true,
        pin: true,
      },

      ease: "power2.inOut",
    });

    stepsTl.to(steps.current, {
      x: -1 * (900 * 2 - 128 * 6),
    });

    const testimonySplit = new SplitType(testimony.current, {
      types: "chars, words",
    });

    const testimonyTl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonyContainer.current,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    testimonyTl.from(testimonySplit.chars, {
      opacity: 0.2,
      stagger: 0.1,
    });

    return () => {
      bgTl.kill();
      middleManTl.kill();
      stepsTl.kill();
      testimonyTl.kill();

      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  useEffect(() => {
    document.title = "College unBound";
  }, []);

  return (
    <ReactLenis root>
      <div className="h-full overflow-x-hidden relative bg-[#1B1B1E]">
        <div className="w-screen h-screen  text-[#FBFFFE]" ref={bg}>
          <div
            className="w-screen h-screen absolute top-0 left-0 opacity-40"
            style={{
              backgroundImage: `url("hero.jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="w-full h-full text-[#FBFFFE] flex flex-col items-center justify-center"
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className="text-[120px] font-medium" ref={centerLogo}>
              College <sub className="text-[#FAA916] opacity-80">un</sub>Bound
            </div>
            <p
              className="text-[24px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0"
              ref={centerText}
            >
              Where “higher education” meets its match—and your wallet stays way
              closer to home.
            </p>
          </div>
        </div>
        <div
          className="w-screen h-screen bg-[#FBFFFE] text-[#1B1B1E] mt-[100vh] flex justify-center items-center"
          ref={middleManContainer}
        >
          <div className="w-full h-full flex flex-col items-center justify-center max-w-[1400px] px-16">
            <div className="text-[120px] font-semibold text-center leading-[130px]">
              Pay yourself,{" "}
              <span className="text-[#96031A] font-semibold">not them.</span>
            </div>
            <div className="text-[48px] mt-8" ref={middleManText}>
              College <sub>un</sub>Bound is here to revolutionize education—by
              cutting out the middleman (ahem, college) and putting the
              “investment” where it truly belongs:{" "}
              <span className="text-[#FAA916] font-semibold">
                in your pocket.
              </span>
            </div>
            <div></div>
          </div>
        </div>
        {/* // The Ultimate Degree in Life Skills™ */}
        {/* // We offer a self-directed, totally unaccredited, 100% parent-funded program that empowers you to pretend you&apos;re enrolled while doing literally anything else. And we don’t just mean staying home and playing video games (unless that’s your major). */}
        <div className="w-screen bg-[#1B1B1E] text-[#FBFFFE] flex flex-col justify-center items-center  py-32">
          <div className="flex flex-col justify-center items-center max-w-[1400px] px-16">
            <div className="w-full h-full flex flex-row justify-center items-start gap-32">
              <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <div className="text-[64px] leading-[70px] text-[#8B8D8E]">
                  The Ultimate Degree in{" "}
                  <span className="text-[#FBFFFE] font-semibold">
                    Life Skills™
                  </span>
                </div>
                <div className="text-[24px] mt-4 font-extralight">
                  We offer a self-directed, totally unaccredited, 100%
                  parent-funded program that empowers you to pretend you&apos;re
                  enrolled while doing literally anything else. And we don’t
                  just mean staying home and playing video games (unless that’s
                  your major).
                </div>
              </div>

              <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <div className="text-[64px] leading-[70px] font-normal">
                  Your coursework is
                  <span className="text-[#FAA916] font-normal">
                    {" "}
                    whatever you decide
                  </span>
                </div>
                <div className="text-[24px] font-extralight mt-4 ">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <span className="text-[#FBD48A] font-medium">
                        World Travel 101:
                      </span>{" "}
                      Backpack across Europe under the guise of “studying
                      abroad.”
                    </li>
                    <li>
                      <span className="text-[#FBD48A] font-medium">
                        Startup Entrepreneurship:
                      </span>{" "}
                      Finally launch that Etsy store or garage band.
                    </li>
                    <li>
                      <span className="text-[#FBD48A] font-medium">
                        Netflixology:
                      </span>{" "}
                      A deep dive into film and procrastination studies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Accreditation? Who Needs It? */}
        {/* // Let’s face it: the diploma mill isn’t really about learning—it’s about looking busy for four years while you rack up debt. We cut through the red tape and give you the authentic college experience: ramen noodles, existential crises, and vague plans for the future. All without the crushing loans! */}
        <div className="w-screen bg-[#590F1C] text-[#FBFFFE] flex flex-col justify-center items-center py-32">
          <div className="flex flex-col justify-center items-center max-w-[1400px] px-16">
            <div className="w-full h-full flex flex-row justify-center items-start gap-32">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-[64px] leading-[70px] text-[#FBFFFE]">
                  Accreditation?{" "}
                  <span className="text-[#FBFFFE] font-semibold">
                    Who Needs It?
                  </span>
                </div>
                <div className="text-[24px] mt-4 font-extralight">
                  Let’s face it: the diploma mill isn’t really about
                  learning—it’s about looking busy for four years while you rack
                  up debt. We cut through the red tape and give you the
                  authentic college experience: ramen noodles, existential
                  crises, and vague plans for the future. All without the
                  crushing loans!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen bg-[#590F1C] px-[25%] m-0">
          <div className="max-w-[1400px] h-[2px] bg-[#b7b7b7]" />
        </div>
        <div
          className="w-screen h-screen bg-[#590F1C] text-[#FBFFFE] flex flex-col justify-center items-center py-32"
          ref={stepsContainer}
        >
          <h1 className="text-[115px] text-[#FBFFFE] font-medium mb-8">
            How It Works
          </h1>
          <div
            className="flex flex-row justify-center items-center gap-32 w-[300vw] overflow-hidden translate-x-[calc(100vw-900px-4rem)]"
            ref={steps}
          >
            <div className="max-w-[1400px] p-8 h-full flex flex-col items-center justify-center bg-[#FBFFFE] relative rounded-2xl w-[900px]">
              <div className="text-[64px] leading-[70px] bg-[#FAA916] w-[75px] h-[75px] text-center rounded-full text-[#FBFFFE] absolute top-[10px] left-[10px]">
                1
              </div>
              <div className="text-[64px] leading-[70px] text-[#1B1B1E] font-semibold">
                Convince Your Parents
              </div>
              <div className="text-[24px] mt-4 font-extralight text-[#1B1B1E]">
                Our foolproof guide helps you craft a totally believable fake
                college plan. “Virtual classes,” “independent study,”
                “professor-approved internships”—we&apos;ve got the buzzwords
                covered.
              </div>
            </div>

            <div className="max-w-[1400px] p-8 h-full flex flex-col items-center justify-center bg-[#FBFFFE] relative rounded-2xl w-[900px]">
              <div className="text-[64px] leading-[70px] bg-[#FAA916] w-[75px] h-[75px] text-center rounded-full text-[#FBFFFE] absolute top-[10px] left-[10px]">
                2
              </div>
              <div className="text-[64px] leading-[70px] text-[#1B1B1E] font-semibold">
                Receive “Tuition”
              </div>
              <div className="text-[24px] mt-4 font-extralight text-[#1B1B1E]">
                Your parents send you their hard-earned money, thinking
                you&apos;re investing in your future. Joke&apos;s on
                them—it&apos;s already here.
              </div>
            </div>

            <div className="max-w-[1400px] p-8 h-full flex flex-col items-center justify-center bg-[#FBFFFE] relative rounded-2xl w-[900px]">
              <div className="text-[64px] leading-[70px] bg-[#FAA916] w-[75px] h-[75px] text-center rounded-full text-[#FBFFFE] absolute top-[10px] left-[10px]">
                3
              </div>
              <div className="text-[64px] leading-[70px] text-[#1B1B1E] font-semibold">
                Live Your Best Life
              </div>
              <div className="text-[24px] mt-4 font-extralight text-[#1B1B1E]">
                Take control of your education, your finances, and your sleep
                schedule. <br />
                <span className="text-[#FAA916] font-medium">
                  No pop quizzes—just pop champagne.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-screen h-screen bg-[#FBFFFE] text-[#1B1B1E] mt-[400vh] flex justify-center items-center"
          ref={testimonyContainer}
        >
          <div className="w-full h-full flex flex-col items-center justify-center max-w-[1400px] px-16">
            <div
              className="text-[60px] mt-8 font-semibold tracking-wide leading-[70px]"
              ref={testimony}
            >
              “College <sub>un</sub>Bound changed my life. I told my parents I
              was double-majoring in &apos;Digital Synergy&apos; and
              &apos;Postmodern Sustainability,&apos; and now they&apos;re
              funding my passion for thrift-flipping vintage Pokémon cards. Best
              part? No finals, no debt, and they still brag about me at dinner
              parties!”
            </div>

            <div className="text-[24px] text-[#8B8D8E] mt-8 text-left w-full">
              Jordan S. &quot;Class&quot; of 2026
            </div>
          </div>
        </div>

        <div className="w-screen bg-[#1B1B1E] text-[#FBFFFE] flex flex-col justify-center items-center py-32">
          <div className="flex flex-col justify-center items-center max-w-[1400px] px-16">
            <div className="w-full h-full flex flex-row justify-center items-start gap-32">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-[24px] mt-4 font-extralight">
                  Stop wasting time memorizing useless facts or pretending to
                  care about group projects. It&apos;s time to get <sub>un</sub>
                  Bound and make higher education work for you.
                  <br />
                  <br />
                  <span className="text-[#8B8D8E]">
                    Because let&apos;s be real:{" "}
                  </span>{" "}
                  if college is a scam, it might as well be your scam.
                </div>

                <button className="mt-8 bg-[#FAA916] text-[#1B1B1E] px-8 py-4 rounded-full">
                  Sign up today. Or don’t. We don’t care—it’s your life.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
