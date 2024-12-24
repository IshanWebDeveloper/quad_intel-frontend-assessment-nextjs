"use client";
import { ArchiveIcon, Trash } from "lucide-react";
import { Button } from "./ui/button";
import ProductsMoreDropDown from "./ui/products-more-dropdown";
import { X } from "lucide-react";
import useStore from "@/store";
const RowItemSelectOption = () => {
  const selectedRowCount = useStore((state) => state.selectedRowCount);
  return (
    <div className=" flex flex-col w-fit px-2 h-fit mt-auto border rounded-lg  self-center  items-center justify-center py-4 bg-opacity-90 mb-2 ">
      <div className="rounded-lg  flex flex-row">
        <div className="flex flex-row gap-2 items-center">
          <div className=" rounded-sm w-5 h-5 bg-white text-base dark:text-black text-center flex items-center justify-center">
            {selectedRowCount}
          </div>
          <p>Selected</p>

          <Button variant="outline" size="default">
            <ArchiveIcon /> Archive
          </Button>
          <Button variant="destructive" size="default">
            <Trash /> Delete
          </Button>
          <ProductsMoreDropDown />
          <Button variant="outline" size="default">
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RowItemSelectOption;