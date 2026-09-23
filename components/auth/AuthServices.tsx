import { Headphones, ShieldCheck, Tag } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    text: "Secure & Safe",
  },
  {
    icon: Tag,
    text: "Exclusive Offers",
  },
  {
    icon: Headphones,
    text: "24/7 Customer Support",
  },
];

export default function AuthServices() {
  return (
    <div className="flex flex-col justify-center gap-8 px-8 py-10">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div key={service.text} className="flex items-center gap-4">
            <Icon size={28} strokeWidth={1.8} className="text-[#B0184F]" />

            <span className="text-sm font-medium text-[#332733]">
              {service.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}
