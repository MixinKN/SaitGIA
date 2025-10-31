import Heading from "@/components/shared/heading";
import { IBannerPointProps } from "@/types/banner.interface";

export function BunnerPoint({ title, subtitle }: IBannerPointProps) {
  return (
    <div>
      <Heading variant="2xl" className="text-black">
        {title}
      </Heading>
      <div className="text-black text-bold text-[20px]">{subtitle}</div>
    </div>
  );
}
