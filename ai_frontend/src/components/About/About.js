import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Innovative Solutions",
    description:
      "At IntelliSaaS, we pride ourselves on delivering innovative solutions that make cutting-edge AI technology accessible and easy to use. Our platform is designed to transform complex AI algorithms into user-friendly tools, empowering creators to stay ahead in the competitive landscape of digital content creation.",
    icon: PhoneIcon,
  },
  {
    name: "Dedicated Customer Support",
    description:
      "We are committed to providing unparalleled customer support. Our dedicated team is available to assist with any questions or concerns, ensuring a smooth and efficient user experience. We strive to empower our users by offering comprehensive support and resources.",
    icon: LifebuoyIcon,
  },
  {
    name: "Press & Media Collaborations",
    description:
      "IntelliSaaS is eager to partner with media and press to share the latest advancements in AI technology and content creation. We are dedicated to shaping the future of digital content and are excited to collaborate on sharing insights and developments that push the boundaries of what's possible.",
    icon: NewspaperIcon,
  },
];

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background and layout elements */}
      {/* ... */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            IntelliSaaS - Ultimate solution for AI powered content
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          IntelliSaaS is at the forefront of AI-powered content creation, revolutionizing how users generate and manage digital content. Our advanced AI technology simplifies the content creation process, allowing users to produce high-quality, engaging material effortlessly. Whether it's text, images, or other media, IntelliSaaS provides the tools and resources needed to enhance creativity and productivity.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}