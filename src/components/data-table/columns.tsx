"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import React from "react";
import { MessagesSquare, Plus } from "lucide-react";
import { Button } from "../ui/button";
import CategoryItem from "./category-item";
import NextMeeting, { Meeting } from "./next-meeting";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  brandName: {
    name: string;
    logo: React.ReactNode;
    messages: number;
  };
  description: string;
  members: React.ReactNode;
  categories: string[];
  tags: string[];
  nextMeeting: Meeting;
  plus?: string;
};

export const producerFilmColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "brandName",
    header: ({ column }) => {
      console.log(column);
      return (
        <div className="flex flex-row justify-between items-center">
          <div className="">Brands</div>
          <Button variant="ghost" size="icon">
            <Plus />
          </Button>
        </div>
      );
    },
    cell: ({ row: { original } }) => (
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          {original.brandName.logo}
          <div className="font-semibold">{original.brandName.name}</div>
        </div>

        <div className="flex items-center gap-1">
          <MessagesSquare className="w-3 h-3" />
          <div className="text-xs">{original.brandName.messages}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "members",
    header: "Members",
    cell: ({ row: { original } }) => (
      <div className="flex w-full flex-row justify-right  -space-x-2  ">
        {original.members}
      </div>
    ),
  },
  {
    accessorKey: "categories",
    header: "Categories",
    cell: ({ row: { original } }) => (
      <div className="flex w-full flex-wrap gap-2  ">
        {original.categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    ),
  },

  {
    accessorKey: "tags",
    header: "Tags",
    enableResizing: false, //disable resizing for just this column
    size: 100, //starting column size
    cell: ({ row: { original } }) => (
      <div className="flex w-[200px] flex-row gap-1 overflow-x-hidden  ">
        {original.tags.map((tag, index) => (
          <div
            key={index}
            className="rounded-sm px-1 border border-1 bg-gray-500  text-gray-800 font-semibold"
          >
            {tag}
          </div>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "nextMeeting",
    header: "Next Meeting",
    cell: ({ row: { original } }) => (
      <div className="flex w-full flex-wrap gap-2  ">
        <NextMeeting nextMeeting={original.nextMeeting} />
      </div>
    ),
  },
  {
    accessorKey: "plus",
    header: () => (
      <div className="flex flex-row">
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
      </div>
    ),
  },
];
