import Heading from "@/components/shared/heading";
import { BunnerPoint } from "./banner-point";

const BANNER_POINTS = [
  {
    title: "211",
    subtitle: "курса и интенсива на платформе",
    key: "banner-point-1", // Следует использовать уникальный ключ чтоб избежать не нужных ререндеров
  },
  {
    title: "11765+",
    subtitle: "вебинаров мы провели в 2024 году",
    key: "banner-point-2",
  },
  {
    title: "43521+",
    subtitle: "пользователей были с нами в 2024 году",
    key: "banner-point-3",
  },
];

export function Bunner() {
  return (
    <section id="bunner-section" className="max-w-[1440px] px-5 mx-auto mt-[120px] mb-[120px]">
      <div className="bg-[url(/banner-bg.png)] px-[100px] py-[12px] rounded-[20px]">
        <Heading variant="2xl" className="text-[#4A7B84]">
          Годовые курсы подготовки к ЕГЭ на 25/26 учебный год
        </Heading>
        <div className="text-black text-[36px] max-w-[710px] leading-none mt-[20px]">
          Скидка до 50% при оплате за весь курс на год
        </div>
        <div className="flex flex-row justify-between my-[28px]">
          {BANNER_POINTS.map((point) => (
            <BunnerPoint
              title={point.title}
              subtitle={point.subtitle}
              key={point.key}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
