"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import React from "react";
import { MessagesSquare, Plus } from "lucide-react";
import { Button } from "../ui/button";

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
  members: string[];
  categories: string[];
  tags: string[];
  nextMeeting: string;
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
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "nextMeeting",
    header: "Next Meeting",
  },
];
