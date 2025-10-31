"use client";
import Heading from "@/components/shared/heading";
import SearchLine from "@/components/shared/search-line";
import { Tags } from "@/components/shared/tags";
import { ALL_OFFERS, ALL_TAGS_LIST } from "./constants";
import { OfferCard } from "@/components/shared/offer-card";
import { useCallback, useState } from "react";

export function Search() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchLine, setSearchLine] = useState("");

  const handleSelectedTagChange = useCallback(
    (newSelectedTagId: string) => {
      if (newSelectedTagId === selectedTag) {
        setSelectedTag("all");
      } else {
        setSelectedTag(newSelectedTagId);
      }
    },
    [setSelectedTag, selectedTag]
  );

  return (
    <section id="search-section" className="max-w-[1440px] px-5 mx-auto mt-[120px] mb-[120px]">
      <Heading variant="2xl" className="text-black">
        Выбор занятий с репетитором
      </Heading>
      <SearchLine
        className="mt-[15px]"
        value={searchLine}
        onChange={(e) => setSearchLine(e.target.value)}
      />
      <Tags
        variant="interactive"
        tags={ALL_TAGS_LIST}
        className="mt-[20px]"
        selectedTagId={selectedTag}
        onSelect={handleSelectedTagChange}
      />
      <div className="flex flex-col gap-[28px] mt-[20px]">
        {ALL_OFFERS.filter(
          (o) =>
            (selectedTag === "all" &&
              (searchLine.length === 0 ||
                o.title.toLocaleLowerCase().includes(searchLine))) ||
            (o.tags.includes(selectedTag) &&
              (searchLine.length === 0 ||
                o.title.toLocaleLowerCase().includes(searchLine)))
        ).map((offer) => (
          <OfferCard
            card={offer}
            key={offer.id}
            onClick={() => {
              window.location.hash = "#section-form";
            }}
          />
        ))}
      </div>
    </section>
  );
}
