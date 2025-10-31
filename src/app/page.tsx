import { Bunner } from "@/components/sections/banner";
import Catalog from "@/components/sections/catalog";
import Form from "@/components/sections/form";
import { Search } from "@/components/sections/search";

export default function Home() {
  return (
    <>
      <Bunner />
      <Catalog />
      <Search />
      <Form />
    </>
  );
}

