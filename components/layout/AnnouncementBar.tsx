import { Gift, ShieldCheck, Truck } from "lucide-react";

const announcementBarItems = [
  {
    id: "shipping",
    icon: Truck,
    text: "FREE SHIPPING ON ORDERS ₹999+",
    className: "",
  },
  {
    id: "offer",
    icon: Gift,
    text: "10% OFF ON YOUR FIRST ORDER | USE CODE:",
    code: "WELCOME10",
    className: "hidden md:flex",
  },
  {
    id: "delivery",
    icon: ShieldCheck,
    text: "FAST & SECURE DELIVERY",
    className: "hidden sm:flex",
  },
];

const AnnouncementBar = () => {
  return (
    <div className="bg-[#fbd5c9] px-4 py-2.5 text-[#4a2118]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs font-medium sm:text-sm">
        {announcementBarItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`items-center gap-2 ${item.className || "flex"}`}
            >
              <Icon size={16} strokeWidth={1.7} />

              <span>
                {item.text}
                {item.code && <strong className="ml-1">{item.code}</strong>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnnouncementBar;
