import { ITagsProps } from "@/types/tags.interface";
import { cn } from "@/lib/utils";

export function Tags({
  variant = "statick",
  tags,
  className,
  selectedTagId,
  onSelect,
}: ITagsProps) {
  return (
    <div className={cn("w-full flex gap-[20px]", className)}>
      {tags.map((tag) => {
        const background =
          selectedTagId === tag.id
            ? "bg-[#DAEFC9]"
            : variant === "statick"
            ? "bg-[#F0F0F0]"
            : "bg-white";
        return (
          <div
            key={tag.id}
            className={cn(
              "text-black text-[20px] py-[10px] px-[20px] rounded-[10px]",
              background,
              variant !== "statick" && "cursor-pointer"
            )}
            onClick={() => onSelect?.(tag.id)}
          >
            {tag.title}
          </div>
        );
      })}
    </div>
  );
}
