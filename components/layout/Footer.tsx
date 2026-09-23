import {
  Truck,
  Clock3,
  ShieldCheck,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "FREE SHIPPING",
    description: "On orders above ₹999",
    icon: Truck,
  },
  {
    title: "SAME DAY DELIVERY",
    description: "In select cities",
    icon: Clock3,
  },
  {
    title: "SECURE PAYMENT",
    description: "100% protected payments",
    icon: ShieldCheck,
  },
  {
    title: "EASY RETURNS",
    description: "Hassle-free returns",
    icon: RotateCcw,
  },
];

const footerLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Shipping Policy",
    href: "/shipping",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#eee5e1] bg-[#fffaf7]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-8 md:grid-cols-4 lg:px-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div key={service.title} className="flex items-center gap-4">
              <Icon className="h-8 w-8 shrink-0 text-[#B0184F]" />

              <div>
                <h3 className="text-sm font-semibold text-[#2d211d]">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs text-[#665854]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-[#eee5e1] bg-[#fbd5c9] text-[#4a2118]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-[#4a2118] sm:flex-row lg:px-8">
          <p>© 2026 Wrapora — Gifts That Delight. All rights reserved.</p>

          <div className="flex gap-5">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
