const Navigation = ({ items }: { items: string[] }) => (
  <ul className="font-regular flex gap-8 text-[15px] leading-[25px] text-white">
    {items.map((item) => (
      <li key={item} className="group relative cursor-pointer">
        <span className="relative">
          {item}
          <span className="absolute -bottom-[8px] left-1/2 h-[2px] w-6 -translate-x-1/2 scale-x-0 transform bg-white transition-transform group-hover:scale-x-100"></span>
        </span>
      </li>
    ))}
  </ul>
);

export default Navigation;
