import { ReactNode, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Linkedin, Mail, MenuIcon, Twitter, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";

function LandingPage() {
  const [isDrawerOpen, setDrawerState] = useState(false);
  const location = useLocation();
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "visible";
  }, [isDrawerOpen]);

  useEffect(() => {
    if (location.pathname == "/") {
      document.title =
        "Declutter Your Browser with TabFlow - The Ultimate Tab Manager!";
    }
  }, [location.pathname]);

  return (
    <div
      className={`${isDrawerOpen ? "overflow-hidden " : "overflow-visible"}`}
    >
      <NavBar setDrawerState={setDrawerState} />

      <Hero />
      <ProblemSection />
      <WhyChooseUs />
      <PricingSection />
      <StepsToInstallSection />
      <FAQSection />
      <OffCanvas setDrawerState={setDrawerState} isDrawerOpen={isDrawerOpen} />
      <Footer />
      <Drawer isDrawerOpen={isDrawerOpen} setDrawerState={setDrawerState} />
    </div>
  );
}

function Drawer({
  isDrawerOpen,

  setDrawerState,
}: {
  isDrawerOpen: boolean;

  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`  text-gray-800 rounded-tl-3xl rounded-bl-3xl px-4 py-6 flex flex-col gap-1 fixed top-0 right-0 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } z-40 transition-transform w-64 ease-in-out duration-200 h-screen overflow-y-auto  bg-white`}
    >
      <div className="relative">
        <X
          onClick={() => {
            setDrawerState(false);
          }}
          className="absolute right-0   transition-all cursor-pointer"
        />
      </div>
      <a
        onClick={() => {
          setDrawerState(false);
        }}
        href="#features"
        className="mt-7 px-3 py-2  rounded-lg hover:bg-green-600 cursor-pointer select-none active:bg-green-700  hover:text-white transition-all"
      >
        Features
      </a>

      <a
        onClick={() => {
          setDrawerState(false);
        }}
        href="#pricing"
        className="px-3 py-2  rounded-lg hover:bg-green-600 cursor-pointer select-none active:bg-green-700  hover:text-white transition-all"
      >
        Pricing
      </a>
      <a
        onClick={() => {
          setDrawerState(false);
        }}
        href="#faq"
        className="px-3 py-2  rounded-lg hover:bg-green-600 cursor-pointer select-none active:bg-green-700  hover:text-white transition-all"
      >
        FAQs
      </a>
      <Button
        onClick={() => {
          window.location.href = "https://9603692170315a.gumroad.com/l/aiovez";
        }}
        className=" border-none !btn-block btn-sm mt-5 h-10 cursor-pointer rounded-full"
      >
        Pre-Order Now
      </Button>
    </div>
  );
}

function OffCanvas({
  setDrawerState,
  isDrawerOpen,
}: {
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
}) {
  return (
    <div
      onClick={() => {
        setDrawerState(false);
      }}
      className={`${
        isDrawerOpen ? "block" : "hidden"
      }  fixed inset-0 bg-black opacity-50 `}
    ></div>
  );
}

function PricingCardBasicPlan() {
  const checkIcon = (
    <svg
      fill="currentColor"
      className="text-green-600 w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
  return (
    <div className="flex flex-col w-[22rem] px-6 p-4 border rounded-xl shadow bg-white  ">
      <h1 className="font-bold text-lg lg:text-xl">Basic Plan</h1>
      <section className="flex mt-2 gap-3 text-2xl lg:text-3xl font-bold">
        <h2 className="line-through text-gray-400">$20</h2>

        <h2 className="text-green-600">$15</h2>
      </section>
      <section className="flex-col text-sm lg:text-base flex gap-3 mt-5">
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">One-click tab saving</p>
        </div>
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">Session Restore</p>
        </div>
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">Basic organization</p>
        </div>
      </section>
      <Button
        onClick={() => {
          window.open(
            "https://9603692170315a.gumroad.com/l/aiovez?option=T82tQ1UYx12yCV804Feo8A%3D%3D&_gl=1*ustpzv*_ga*MTcyNzA0NTMuMTczODc3MzQ5Ng..*_ga_6LJN6D94N6*MTc0MTM3MzA1Ni4zNi4xLjE3NDEzNzc5MjUuMC4wLjA.&wanted=true",
            "_blank"
          );
        }}
        size={"lg"}
        className="rounded-full cursor-pointer mt-6"
      >
        Pre-Order Now
      </Button>
    </div>
  );
}

function PricingCardAdvancedPlan() {
  const checkIcon = (
    <svg
      fill="currentColor"
      className="text-green-600 w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
  return (
    <div className="flex flex-col w-[22rem] px-6 p-4 border border-green-600 rounded-xl shadow bg-white  ">
      <section className="flex justify-between items-center">
        <h1 className="font-bold text-lg lg:text-xl">Advanced AI Plan</h1>
        <div className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-2  rounded-full">
          Popular
        </div>
      </section>
      <section className="flex mt-2 gap-3 text-2xl lg:text-3xl font-bold">
        <h2 className="line-through text-gray-400">$30</h2>

        <h2 className="text-green-600">$25</h2>
      </section>
      <section className="flex-col text-sm lg:text-base  flex gap-3 mt-5">
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">Everything in Basic</p>
        </div>
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">AI-powered gropuing</p>
        </div>
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">Cross-Device sync</p>
        </div>
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">Priority Support</p>
        </div>
        <div className="flex gap-2 items-center">
          {checkIcon}
          <p className="">
            Include 1,500 AI Requests<br></br>
            <span className="font-semibold">($5 for 1,000 extra)</span>
          </p>
        </div>
      </section>
      <Button
        onClick={() => {
          window.open(
            "https://9603692170315a.gumroad.com/l/aiovez?option=kPB3YrSbQvyTgOsDZnKtew%3D%3D&_gl=1*1wixtr5*_ga*MTcyNzA0NTMuMTczODc3MzQ5Ng..*_ga_6LJN6D94N6*MTc0MTM3MzA1Ni4zNi4xLjE3NDEzNzc4OTYuMC4wLjA.&wanted=true",
            "_blank"
          );
        }}
        size={"lg"}
        className="rounded-full cursor-pointer mt-6"
      >
        Pre-Order Now
      </Button>
    </div>
  );
}

function PricingSection() {
  return (
    <div id="pricing" className="my-30   ">
      <section className="container mx-auto flex flex-col items-center  ">
        <h1 className="font-bold lg:text-4xl text-3xl">Simple & Affordable</h1>
        <h4 className="mt-4 text-muted-foreground text-sm lg:text-base font-medium text-center">
          One-time purchase, lifetime updates
        </h4>
        <div className="flex flex-col lg:flex-row mt-8 gap-10 items-start">
          <PricingCardBasicPlan />
          <PricingCardAdvancedPlan />
        </div>
      </section>
    </div>
  );
}
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <Card className="shadow-md mx-2">
    <CardContent className="px-4">
      <h3 className="text-sm lg:text-base font-semibold">{question}</h3>
      <p className="text-xs lg:text-sm text-gray-600 mt-1">{answer}</p>
    </CardContent>
  </Card>
);

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2025-03-08T00:00:00`) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex space-x-4 text-xl font-semibold items-center justify-center">
      <div className="w-fit bg-white py-2 text-sm lg:text-base px-4 text-green-600 rounded-lg">
        {String(days).padStart(2, "0")}{" "}
        <span className="text-xs lg:text-sm text-black">days</span>
      </div>
      <div className="w-fit bg-white py-2 px-4 text-sm lg:text-base text-green-600 rounded-lg">
        {String(hours).padStart(2, "0")}{" "}
        <span className=" text-xs lg:text-sm text-black">hours</span>
      </div>
      <div className="w-fit bg-white py-2 px-4 text-sm lg:text-base  text-green-600 rounded-lg">
        {String(minutes).padStart(2, "0")}{" "}
        <span className="text-xs lg:text-sm text-black">minutes</span>
      </div>
      <div className="w-fit bg-white py-2 px-4 text-sm lg:text-base text-green-600 rounded-lg">
        {String(seconds).padStart(2, "0")}{" "}
        <span className="text-xs lg:text-sm text-black">seconds</span>
      </div>
    </div>
  );
};

function FAQSection() {
  const faqs = [
    {
      question: "How do I install TabFlow?",
      answer:
        "Simply download from our website and follow the installation wizard. It takes less than 2 minutes!",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a one-time purchase model with a 30-day money-back guarantee if you're not satisfied.",
    },
    {
      question: "Does it work on multiple devices?",
      answer: "Yes! TabFlow syncs across all your devices using Chrome sync.",
    },
    {
      question: "Can I get a refund if I don't like it?",
      answer:
        "Absolutely! We offer a 30-day money-back guarantee, no questions asked.",
    },
  ];

  return (
    <div id="faq" className="flex flex-col items-center  space-y-8 py-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mx-2 lg:mx-0">
        Got Questions? We've Got Answers!
      </h2>
      <div className="mx-4 w-full max-w-2xl  space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
      <div className="w-full bg-green-600 text-white text-center py-14  mt-10">
        <h3 className="text-2xl lg:text-3xl font-bold">
          Grab Your Early-Bird Offer Before the Price Increases!
        </h3>
        <p className="mt-3 text-lg lg:text-xl">
          Limited time offer – Save up to 20% today!
        </p>
        <div className="mt-5">
          <CountdownTimer />
        </div>
        <Button
          onClick={() => {
            window.location.href =
              "https://9603692170315a.gumroad.com/l/aiovez";
          }}
          className="mt-8    h-8 rounded-full px-3 py-2 text-xs    lg:h-10 lg:rounded-full lg:px-8  cursor-pointer bg-white text-green-600 hover:bg-gray-100"
        >
          Pre-Order TabFlow Now
        </Button>
      </div>
    </div>
  );
}

const Footer = () => (
  <footer className="bg-gray-200 text-white py-6 mt-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
      <div>
        <section className="flex gap-1 items-center">
          <img src="./icon.png" className="h-8 w-8 " />
          <h3 className="font-bold text-lg text-gray-800">TabFlow</h3>
        </section>
        <p className="text-sm mt-2 text-gray-700">
          The ultimate tab management solution for your browser.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-gray-600">Quick Links</h4>
        <ul className="text-sm mt-2 space-y-2 text-gray-800   ">
          <li>
            <a href="#features" className="hover:text-gray-950">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-950">
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-gray-950">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-600">Legal</h4>
        <ul className="text-sm mt-2 space-y-2 text-gray-800">
          <li>
            <NavLink to="/privacy-policy" className="hover:text-gray-950">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/termsofs" className="hover:text-gray-950">
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/refund-policy" className="hover:text-gray-950">
              Refund Policy
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-600">Contact</h4>
        <p className="text-sm mt-2 space-y-2 flex items-center text-gray-800 ">
          <Mail className="w-4 h-4 mr-2" />
          ahmed.sleem1206@gmail.com
        </p>
        <div className="flex space-x-3 mt-4 text-gray-800">
          <a
            target="_blank"
            href="https://x.com/sleem_ahme70629"
            className=" hover:text-gray-950"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-sleem-a6ba0a263/"
            className=" hover:text-gray-950"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <p className="text-center text-gray-800 text-sm mt-6">
      © 2025 TabFlow. All rights reserved.
    </p>
  </footer>
);

function StepsToInstallSection() {
  return (
    <div id="steps" className="my-26 py-8  bg-white">
      <section className="flex  flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-center">
          Get Started in 3 Simple Steps
        </h1>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 mt-16">
          <StepCard
            title="Buy TabFlow"
            description="Secure your early-bird price today"
            stepNumber={1}
          />
          <StepCard
            title="Download & Install"
            description="Follow our easy setup guide"
            stepNumber={2}
          />
          <StepCard
            title="Enjoy TabFlow"
            description="Experience clutter-free browsing"
            stepNumber={3}
          />
        </div>
      </section>
    </div>
  );
}
function StepCard({
  title,
  description,
  stepNumber,
}: {
  title: string;
  description: string;
  stepNumber: number;
}) {
  const cartIcon = (
    <svg
      fill="currentColor"
      className="text-green-600 w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  );

  const downloadIcon = (
    <svg
      fill="currentColor"
      className="text-green-600 w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>
  );
  const checkIcon = (
    <svg
      fill="currentColor"
      className="text-green-600 w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
        {stepNumber == 1
          ? cartIcon
          : stepNumber == 2
          ? downloadIcon
          : stepNumber == 3
          ? checkIcon
          : null}
      </div>
      <h2 className="font-bold text-center text-lg lg:text-xl">
        {stepNumber}. {title}
      </h2>
      <p className="text-muted-foreground text-center text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div id="features" className="my-20  bg-white py-6 ">
      <section className="container lg:mx-auto         mx-2 flex flex-col items-center  ">
        <h1 className="font-bold text-4xl text-center">Why Choose TabFlow?</h1>
        <FeatureSection />
      </section>
    </div>
  );
}

function ProblemSection() {
  const speedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 512 512"
    >
      <path
        fill="#d70f0f"
        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
      />
    </svg>
  );

  const warningIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon w-8 h-8 text-amber-600 icon-tabler icons-tabler-filled icon-tabler-alert-square-rounded"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  );

  const timeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler text-green-600 w-8 h-8 icons-tabler-filled icon-tabler-clock-hour-3"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0 -2h-2.5v-4a1 1 0 0 0 -.883 -.993z" />
    </svg>
  );

  return (
    <div
      id="problems"
      className="container mx-2 lg:mx-auto mt-10 mb-30    justify-center flex flex-col items-center"
    >
      <h1 className="font-bold text-3xl lg:text-4xl text-center">
        Drowning in Open Tabs? We've Got You Covered!
      </h1>
      <h4 className="mt-4 text-sm lg:text-base text-muted-foreground font-medium text-center">
        TabFlow helps you manage, save, and restore your tabs with just one
        click—<br></br>keeping your workflow smooth and distraction-free!
      </h4>
      <section className=" lg:flex-row flex-col flex gap-16 mt-8">
        <ProblemComponent
          title="Browser Slowdown"
          description="Too many open tabs slow down your browser and impact performance"
          icon={speedIcon}
        />
        <ProblemComponent
          title="Lost Important Tabs"
          description="Important tabs get lost in the chaos of multiple windows"
          icon={warningIcon}
        />
        <ProblemComponent
          title="Time-Consuming"
          description="Manual tab organization is tedious and wastes valuable time"
          icon={timeIcon}
        />
      </section>
    </div>
  );
}

function FeatureSection() {
  const cloudSvg = (
    <svg
      fill="currentColor"
      className="text-blue-600 w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
    </svg>
  );

  const brainSvg = (
    <svg
      fill="currentColor"
      className="text-purple-600 w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" />
    </svg>
  );

  const zapSvg = (
    <svg
      fill="currentColor"
      className="text-yellow-600 w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z" />
    </svg>
  );

  const shieldSvg = (
    <svg
      fill="currentColor"
      className="text-red-600 w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" />
    </svg>
  );

  const refreshSvg = (
    <svg
      className="text-green-600 w-8 h-8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
    </svg>
  );

  const tagSvg = (
    <svg
      fill="currentColor"
      className="text-green-600 w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </svg>
  );

  const features = [
    {
      icon: zapSvg,
      title: "One-Click Tab Saving",
      description: "Save all open tabs instantly with a single click.",
    },
    {
      icon: refreshSvg,
      title: "Session Restore",
      description: "Reload your previous tabs anytime, anywhere.",
    },
    {
      icon: brainSvg,
      title: "AI-Powered Organization",
      description: "Smart grouping of similar tabs automatically.",
    },
    {
      icon: cloudSvg,
      title: "Cross-Device Sync",
      description: "Access your saved tabs on any device.",
    },
    {
      icon: shieldSvg,
      title: "Privacy Focused",
      description: "Your data stays private and secure.",
    },
    {
      icon: tagSvg,
      title: "One-Time Purchase",
      description: "No recurring fees or subscriptions.",
    },
  ];
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-16 mx-auto  my-6 mt-10 ">
      {features.map((feature, index) => (
        <FeatureComponent
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}

function ProblemComponent({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2 w-80 ">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function FeatureComponent({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-white cursor-pointer p-4 rounded-lg hover:shadow-md border flex flex-col gap-2 w-82 ">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container   flex-col lg:flex-row lg:h-fit h-screen   mx-auto justify-center lg:justify-between items-center  flex   ">
        <section className="  flex flex-col items-center justify-center  lg:items-start lg:justify-start ">
          <h1 className="font-bold text-4xl lg:text-5xl text-center lg:text-start  leading-tight">
            Declutter Your Browser with TabFlow{" "}
            <span className="text-primary ">- The Ultimate Tab Manager!</span>
          </h1>
          <h4 className="mt-4 text-sm lg:text-base text-muted-foreground font-medium text-center lg:text-start">
            Save, organize, and restore tabs effortlessly—never lose important
            work again!
          </h4>

          <div className="flex mt-8 gap-3">
            <Button
              onClick={() => {
                window.location.href =
                  "https://9603692170315a.gumroad.com/l/aiovez";
              }}
              size={"xl"}
              className="rounded-full cursor-pointer"
            >
              Pre-Order Now
            </Button>
            <Button
              onClick={() => {
                navigate("/waitlist");
              }}
              size={"xl"}
              variant="outline"
              className="rounded-full cursor-pointer"
            >
              Join Waitlist
            </Button>
          </div>
        </section>
        <img
          className={` h-[580px] object-cover hidden lg:block`}
          src="heroImage.png"
        />
      </div>
    </>
  );
}

function NavBar({
  setDrawerState,
}: {
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className=" border-b-1 pt-4 pb-4 ">
      <div className="flex justify-between items-center  mx-6  ">
        <Logo />
        <NavLinks />

        <Button
          onClick={() => {
            window.location.href =
              "https://9603692170315a.gumroad.com/l/aiovez";
          }}
          className="rounded-full cursor-pointer hidden lg:block"
        >
          Pre-Order Now
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setDrawerState(true)}
          className="block lg:hidden  cursor-pointer "
        >
          <MenuIcon className="text-black" />
        </Button>
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="hidden lg:flex items-center">
      <Button
        onClick={() => {
          window.location.href = "#features";
        }}
        variant="link"
        className="text-gray-500 cursor-pointer"
      >
        Features
      </Button>
      <Button
        onClick={() => {
          window.location.href = "#pricing";
        }}
        variant="link"
        className="text-gray-500 cursor-pointer"
      >
        Pricing
      </Button>
      <Button
        onClick={() => {
          window.location.href = "#steps";
        }}
        variant="link"
        className="text-gray-500 cursor-pointer"
      >
        How it Works
      </Button>
      <Button
        onClick={() => {
          window.location.href = "#faq";
        }}
        variant="link"
        className="text-gray-500 cursor-pointer"
      >
        FAQ
      </Button>
    </div>
  );
}

export function Logo() {
  return (
    <a href="/tabflow" className="flex cursor-pointer w-fit items-center  gap-1 ">
      <img src="./icon.png" alt="Logo" className="lg:w-11 w-9 h-9 lg:h-11" />
      <h1 className="text-lg lg:text-xl font-bold">TabFlow</h1>
    </a>
  );
}

export default LandingPage;
