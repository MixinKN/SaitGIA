import React from "react";
import Heading from "@/components/shared/heading";
import Container from "@/components/shared/container";
import { CATALOG_MENU_1 } from "@/types/catalogMenu";
import { CATALOG_MENU_2 } from "@/types/catalogMenu";
import { CATALOG_MENU_3 } from "@/types/catalogMenu";
import { CATALOG_MENU_4 } from "@/types/catalogMenu";

const Catalog = () => {
  return (
    <section className="mt-[120px] mb-[120px]" id="section-catalog">
      <Container>
        <div className="flex flex-col">
          <div className="bg-white rounded-[20px]">
            <Heading className="text-black pt-[80px] pb-[80px]" variant={"2xl"}>
              Каталог курсов для подготовки к ЕГЭ
            </Heading>
          </div>
          <div className="bg-[url(/SaitGIA/catalogBg.png)] h-[860px] rounded-[20px]">
            <div className="flex flex-col gap-y-[80px] pl-[20px] pr-[20px] pt-[30px] pb-[30px]">
              <div className="flex justify-between">
                {CATALOG_MENU_1.map((item) => (
                  <div
                    key={item.id}
                    style={{ backgroundImage: item.image }}
                    className={`flex flex-col gap-y-[20px] p-[15] w-[255px] h-[140px] duration-300 transition-all hover:scale-110 hover:drop-shadow-2xl hover:cursor-pointer`}
                  >
                    <span className="text-[20px] flex-auto">{item.title}</span>
                    <span className="text-[20px] flex-auto">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                {CATALOG_MENU_2.map((item) => (
                  <div
                    key={item.id}
                    style={{ backgroundImage: item.image }}
                    className={`flex flex-col gap-y-[20px] p-[15] w-[255px] h-[140px] duration-300 transition-all hover:scale-110 hover:drop-shadow-2xl hover:cursor-pointer`}
                  >
                    <span className="text-[20px] flex-auto">{item.title}</span>
                    <span className="text-[20px] flex-auto">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                {CATALOG_MENU_3.map((item) => (
                  <div
                    key={item.id}
                    style={{ backgroundImage: item.image }}
                    className={`flex flex-col gap-y-[20px] p-[15] w-[255px] h-[140px] duration-300 transition-all hover:scale-110 hover:drop-shadow-2xl hover:cursor-pointer`}
                  >
                    <span className="text-[20px] flex-auto">{item.title}</span>
                    <span className="text-[20px] flex-auto">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                {CATALOG_MENU_4.map((item) => (
                  <div
                    key={item.id}
                    style={{ backgroundImage: item.image }}
                    className={`flex flex-col gap-y-[20px] p-[15] w-[255px] h-[140px] duration-300 transition-all hover:scale-110 hover:drop-shadow-2xl hover:cursor-pointer`}
                  >
                    <span className="text-[20px] flex-auto">{item.title}</span>
                    <span className="text-[20px] flex-auto">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;

