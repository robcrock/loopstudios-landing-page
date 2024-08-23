import Image from "next/image";

const SOCIAL_ICONS = ["facebook", "twitter", "pinterest", "instagram"];

const SocialIcons = () => (
  <ul className="flex gap-4">
    {SOCIAL_ICONS.map((social) => (
      <li key={social} className="group relative cursor-pointer">
        <span className="relative">
          <Image
            src={`/images/icon-${social}.svg`}
            alt={`${social} icon`}
            width={24}
            height={24}
          />
          <span className="absolute -bottom-[8px] left-1/2 h-[2px] w-6 -translate-x-1/2 scale-x-0 transform bg-white transition-transform group-hover:scale-x-100"></span>
        </span>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
