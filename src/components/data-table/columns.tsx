"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import React from "react";
import { MessagesSquare, Plus } from "lucide-react";
import { Button } from "../ui/button";
import CategoryItem from "./category-item";
import NextMeeting, { Meeting } from "../next-meeting";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const categories = [
  "Automation",
  "E-commerce",
  "B2B",
  "Marketplace",
  "B2C",
  "Technology",
  "Mobile",
  "SAAS",
  "Finance",
  "Transportation",
  "Publishing",
  "Web Services",
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tags = [
  "#DigitalTransformation",
  "#Popular",
  "#OnlineShopping",
  "#TechInnovation",
  "#CloudComputing",
  "#BuySellOnline",
  "#BusinessPartnerships",
  "#SmartFinance",
  "#LogisticsTech",
  "#B2CMarketing",
  "#SaasProducts",
  "#UX",
  "#RetailIT",
  "#APIIntegration",
] as const;

export type Category = (typeof categories)[number];

export type Tag = (typeof tags)[number];

export type Product = {
  id?: string;
  brandName?: {
    name?: string;
    logo?: React.ReactNode;
    messageCount?: number;
    isCountVisible?: boolean;
  };
  description?: string;
  members?: number;
  categories?: Category[];
  tags?: Tag[];
  nextMeeting?: Meeting;
  plus?: string;
  isCountVisible?: boolean;
};

export const producerFilmColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    maxSize: 50,
    header: ({ table }) => (
      <div className="flex flex-row items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row: { index, getIsSelected, toggleSelected }, table }) => {
      // render a differnt cell at last row
      if (index === table.getRowCount() - 1) {
        return (
          <div className=" flex flex-row items-center justify-center  "></div>
        );
      }
      return (
        <div className=" flex flex-row items-center justify-center">
          <Checkbox
            checked={getIsSelected()}
            onCheckedChange={(value) => toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "brandName",
    enableResizing: false,
    size: 200,
    filterFn: (row, id, filterValue) => {
      const value = row.original?.brandName?.name;
      return (
        value?.toLowerCase()?.includes(filterValue?.toLowerCase()) || false
      );
    },
    header: () => {
      return (
        <div className="flex flex-row justify-between items-center ">
          <div className="">Brands</div>
          <Button variant="ghost" size="icon">
            <Plus />
          </Button>
        </div>
      );
    },
    cell: ({ row: { original, index }, table }) => {
      if (index === table.getRowCount() - 1) {
        return (
          <div className="flex flex-row items-center justify-end gap-2">
            <span className="font-semibold">{table.getRowCount() - 1}</span>
            <p>Count</p>
          </div>
        );
      }
      return (
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-2">
            {original?.brandName?.logo}
            <div className="font-semibold  text-black dark:text-white">
              {original?.brandName?.name}
            </div>
          </div>

          {original?.brandName?.messageCount && (
            <div className="flex items-center gap-1">
              <MessagesSquare className="w-3 h-3 text-black dark:text-white" />
              <div className="text-xs text-black dark:text-white">
                {original.brandName.messageCount}
              </div>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row: { original, index }, table }) => {
      if (index === table.getRowCount() - 1) {
        return (
          <div className="flex flex-row items-center   justify-end gap-2">
            <Button variant="ghost" size="default">
              <Plus /> Add Description
            </Button>
          </div>
        );
      }
      return (
        <p className=" dark:text-white flex-nowrap text-nowrap text-black">
          {original.description}
        </p>
      );
    },
  },
  {
    accessorKey: "members",
    header: "Members",
    cell: ({ row: { original, index }, table }) => {
      if (index === table.getRowCount() - 1) {
        return (
          <div className="flex flex-row items-center  justify-end gap-2">
            <Button variant="ghost" size="default">
              <Plus /> Add Calculation
            </Button>
          </div>
        );
      }
      return (
        <div className="flex items-center -space-x-2 w-fit h-fit">
          {Array.from({ length: original.members! }).map((_, i) => (
            <Avatar key={i} style={{ width: "25px", height: "25px" }}>
              <AvatarImage
                src={`https://avatar.iran.liara.run/public/girl`}
                className="w-full h-full object-cover"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "categories",
    header: "Categories",
    enableResizing: false,
    size: 250,
    cell: ({ row: { original, index }, table }) => {
      if (index === table.getRowCount() - 1) {
        return (
          <div className="flex flex-row items-center  justify-end gap-2">
            <Button variant="ghost" size="default">
              <Plus /> Add Calculation
            </Button>
          </div>
        );
      }
      return (
        <div className="flex w-full  gap-2  ">
          {original?.categories?.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      );
    },
  },

  {
    accessorKey: "tags",
    header: "Tags",
    enableResizing: false,
    size: 200, //starting column size
    cell: ({ row: { original, index }, table }) => {
      if (index === table.getRowCount() - 1) {
        return (
          <div className="flex flex-row items-center  justify-end gap-2">
            <Button variant="ghost" size="default">
              <Plus /> Add Calculation
            </Button>
          </div>
        );
      }
      return (
        <div className="flex w-[200px] flex-row gap-1 overflow-x-hidden  ">
          {original?.tags?.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-100 text-gray-600 font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "nextMeeting",
    header: "Next Meeting",
    enableResizing: false,
    cell: ({ row: { original } }) => {
      if (original?.nextMeeting)
        return (
          <div className="flex w-fit flex-wrap gap-2 items-center justify-center  ">
            <NextMeeting nextMeeting={original?.nextMeeting} />
          </div>
        );
    },
  },
  {
    accessorKey: "plus",
    enableResizing: false,
    size: 100,
    maxSize: 100,
    header: () => (
      <div className="flex flex-row w-[50px] items-center justify-between ">
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
      </div>
    ),
  },
];
