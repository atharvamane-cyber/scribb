import { CloudRain } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Start taking notes instantly without any costs. Signing up is quick and easy, and you can begin organizing your thoughts right away.",
    icon: CloudRain,
  },
  {
    name: "Blazing fast performance",
    description:
      "Capture your ideas at the speed of thought. Our app ensures smooth and fast note-taking, even with large amounts of content.",
    icon: CloudRain,
  },
  {
    name: "Super secure with Kinde",
    description:
      "Your notes are encrypted and securely stored. We use Kinde for authentication, ensuring your personal information is safe.",
    icon: CloudRain,
  },
  {
    name: "Easy to use",
    description:
      "Designed with simplicity in mind, our app lets you focus on your thoughts without being overwhelmed by unnecessary features.",
    icon: CloudRain,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Take Notes Effortlessly</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Organize your ideas in seconds
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Whether youre brainstorming, writing a to-do list, or jotting down
          important information, our app helps you stay organized and efficient.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
