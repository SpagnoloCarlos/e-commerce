import Image from "next/image";
import slide from "../../../../public/pics/slider-ecommerce.webp";

const Slider = () => {
  return (
    <ul className="max-w-[1600px] mx-auto">
      <li>
        <Image
          src={slide}
          alt="Slider principal"
          width={1600}
          height={534}
          priority
        />
      </li>
    </ul>
  );
};

export default Slider;
