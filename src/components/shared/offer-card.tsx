import { cn } from "@/lib/utils";
import { IOfferCardProps } from "@/types/offer-card.interface";
import { Tags } from "./tags";
import { ALL_TAGS } from "../sections/search/constants";

const getTagsList = (tagIdList: string[]) =>
  tagIdList.map((id) => ({
    id,
    title: ALL_TAGS[id],
  }));

export function OfferCard({ card, onClick, className }: IOfferCardProps) {
  return (
    <div
      className={cn(
        "w-full bg-white rounded-[20px] text-black flex h-[735px]",
        className
      )}
    >
      <div className="w-[340px] py-[40px] px-[30px] border-r-2 border-[#D9D9D9]">
        <img src={card.img} />
        <div className="mt-[36px] text-[20px] font-bold">{card.leftTitle}</div>
        <div className="mt-[15px] text-[16px]">{card.leftDescription}</div>
      </div>
      <div className="flex flex-col flex-1 py-[40px] px-[30px] ">
        <Tags variant="statick" tags={getTagsList(card.tags)} />
        <div className="text-[32px] mt-[35px]">{card.title}</div>
        <div className="text-[20px] mt-[20px] flex-1">{card.description}</div>
        <div className="flex content-center justify-between">
          <div>
            <div className="text-[28px] font-bold">{card.price}</div>
            <div className="text-[20px] text-[#84BFC6] mt-[2px]">
              {card.priceEditionalInfo}
            </div>
          </div>
          <button
            onClick={onClick}
            className="duration-200 transition-all hover:scale-110 cursor-pointer text-white font-bold text-[24px] bg-[#59C0D1] h-[72px] py-[19px] px-[42px] rounded-[20px] ml-[100px]"
          >
            Оформить
          </button>
        </div>
      </div>
    </div>
  );
}
