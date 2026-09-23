import { Heart } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex items-center gap-3 text-3xl font-semibold text-(--color-text-primary)">
        {title}

        <Heart size={32} strokeWidth={1.8} className="text-(--color-primary)" />
      </h1>

      <p className="text-(--color-text-secondary)">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;
