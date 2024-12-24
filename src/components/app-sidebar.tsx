import * as React from "react";
import {
  ChevronDown,
  CircleHelp,
  Folder,
  PenTool,
  Plus,
  SquarePlus,
  UserPlus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CommandShortcut } from "./ui/command";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineCode } from "react-icons/md";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// This is sample data.
const data = {
  navMain: [
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Roadmap",
          url: "#",
        },
        {
          title: "Feedback",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Add new sub",
          url: "#",
          icon: SquarePlus,
        },
      ],
    },
    {
      title: "Sales",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
      ],
    },
    {
      title: "Design",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
      ],
    },
    {
      title: "Office",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
      ],
    },
    {
      title: "Legal",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      className="w-[265px] my-2 mx-2 "
      style={{
        height: "98%",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <SidebarHeader
        style={{
          borderColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: "1px",
          borderRadius: "25px",
          marginBottom: "0.5rem",
        }}
      >
        <SidebarMenu className="flex-row items-center justify-between bg scrollbar-hide ">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-btext-sidebar-primary-foreground">
                  <PenTool className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">INC</span>
                  <span className="font-bold">Innovate Hub</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Avatar className="w-7 h-7 ">
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={10}
              height={10}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup
          style={{
            marginBottom: "0.5rem",
            borderWidth: "1px",
            borderRadius: "10px",
          }}
        >
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-medium ">
                  <PenTool className="size-4" />
                  Design Team
                  <CommandShortcut className="rounded-lg ring-[0.5px] px-1.5 py-0.5 dark:bg-gray-500 dark:text-white border-gray-400 text-[8px] ">
                    ⌘ + 1
                  </CommandShortcut>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-medium">
                  <TbSpeakerphone />
                  <span>Marketing Team </span>
                  <CommandShortcut className="rounded-lg ring-[0.5px] px-1.5 py-0.5 dark:bg-gray-500 dark:text-white border-gray-400 text-[8px] ">
                    ⌘ + 2
                  </CommandShortcut>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-medium">
                  <MdOutlineCode />
                  <span>Development Team</span>
                  <CommandShortcut className="rounded-lg ring-[0.5px] px-1.5 py-0.5 dark:bg-gray-500 dark:text-white border-gray-400 text-[8px] ">
                    ⌘ + 3
                  </CommandShortcut>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator />
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-medium text-gray-400 ">
                  <Plus color="#6d6d70" />
                  Create a team
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup
          style={{
            marginBottom: "0.5rem",
            borderWidth: "1px",
            borderRadius: "10px",
          }}
        >
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-bold text-xs text-gray-400">
                  FOLDERS
                  <Plus className="ml-auto" color="#6d6d70" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {data.navMain.map((item) => (
              <Collapsible
                defaultOpen={item.title === "Products"}
                className="group/collapsible"
                key={item.title}
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="font-medium">
                        <Folder className="size-4" />
                        {item.title}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild>
                              <a
                                href={item.url}
                                className={`font-medium ${
                                  item.icon
                                    ? "font-light text-gray-400"
                                    : "inactive-link"
                                }`}
                              >
                                {item.icon ? (
                                  <item.icon
                                    className="size-4"
                                    color="#6d6d70"
                                  />
                                ) : null}
                                {item.title}
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="flex mt-auto ">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-medium">
                  <UserPlus />
                  Invite teammates
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="font-medium flex flex-row items-center">
                  <CircleHelp />
                  Help and first steps
                  <Badge
                    variant="outline"
                    className="bg-gray-100 dark:bg-gray-200 font-semibold text-gray-600  px-1 py-0 h-fit ml-auto  line-height-0"
                  >
                    0/6
                  </Badge>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <div className="font-medium flex flex-row items-center border p-2 rounded-lg">
                <p className=" rounded-sm w-4 h-4 bg-black dark:bg-white text-sm text-white dark:text-black text-center flex items-center justify-center">
                  7
                </p>
                <span className="ml-2 text-sm">days left on trial</span>
                <Button
                  variant="default"
                  className="ml-auto h-6 text-xs font-bold  px-2 line-height-0"
                >
                  Add billing
                </Button>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
