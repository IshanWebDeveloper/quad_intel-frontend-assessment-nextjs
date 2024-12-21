import { DataTable } from "@/components/data-table/datatable";
import { producerFilmColumns, Product } from "../components/data-table/columns";
import { Button } from "@/components/ui/button";
import {
  ArrowDown10,
  Import,
  MessagesSquare,
  PlusSquare,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import { NavSearchInput } from "@/components/NavSearchInput";
import { Separator } from "@/components/ui/separator";
import AllBrandsComboDropDown from "@/components/all-brands-combo";
import { DeskComboDropDown } from "@/components/desk-combo";
import TagsComboDropDown from "@/components/tags-combo";
import { productsData } from "@/lib/data";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return productsData;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] text-[color:var(--geist-foreground)] bg-[color:var(--geist-background)] ">
      <main className="w-full ">
        <div className="px-4 py-4 flex flex-row w-full items-center justify-between">
          <h1 className="text-lg font-medium">Products</h1>
          <div className="flex gap-2 items-center">
            <NavSearchInput />
            <Button variant="outline" size="icon">
              <MessagesSquare />
            </Button>
            <Button variant="outline" size="icon">
              <Settings />
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex flex-row w-full my-2 px-3 items-center justify-between">
          <div className="flex flex-row items-center gap-2 w-fit">
            <AllBrandsComboDropDown />
            <DeskComboDropDown />
            <TagsComboDropDown />
            <Button variant="outline" size="default" className="text-gray-400">
              <ArrowDown10 /> Sort
            </Button>
            <Button variant="outline" size="default" className="text-gray-400">
              <SlidersHorizontal /> Filter
            </Button>
          </div>
          <div className=" gap-2 flex flex-row items-center">
            <Button variant="outline" size="default">
              <PlusSquare /> Meeting
            </Button>
            <Button variant="outline" size="default">
              <Import />
              Import / Export
            </Button>
          </div>
        </div>
        <DataTable columns={producerFilmColumns} data={data} />
      </main>
    </div>
  );
}
