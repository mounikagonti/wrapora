import { Gift, Heart, Smile } from "lucide-react";

const services = [
  {
    icon: Gift,
    text: "Curated with Care",
  },
  {
    icon: Heart,
    text: "Beautifully Packed",
  },
  {
    icon: Smile,
    text: "Delivered with Love",
  },
];

const LoginServices = () => {
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
};
export default LoginServices;
