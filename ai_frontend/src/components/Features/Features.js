import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
  } from "@heroicons/react/20/solid";
  
  const features = [
    {
      name: "Instant Content Generation",
      description:
        "Our system allows you to create content on demand, utilizing advanced algorithms to provide relevant and high-quality outputs. With just a few clicks, you can produce the content you need, saving time and effort.",
      href: "#",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Secure and Scalable",
      description:
        "We provide robust security features, including SSL certificates, to protect your data and transactions. Our infrastructure is designed to scale seamlessly, accommodating the growing demands of your content generation needs.",
      href: "#",
      icon: LockClosedIcon,
    },
    {
      name: "Effortless Content Management",
      description:
        "Our platform offers simple and effective content management tools, allowing you to keep track of your generated content, access history, and manage your assets. With user-friendly interfaces and efficient organization, managing your content has never been easier.",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  
  export default function AppFeatures() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Accelerate Content Creation
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            All the tools you need to generate high-quality content quickly and efficiently.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI platform provides an intuitive and powerful environment for content creation, offering a seamless user experience. Whether you need text, images, or other media, our tools are designed to help you produce content effortlessly.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-indigo-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }