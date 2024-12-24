import { Product } from "@/components/data-table/columns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export const productsData: Product[] = [
  {
    id: "1",
    brandName: {
      name: "Wix",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/wix-company-icon.svg"
            alt="wix"
            width={20}
            height={20}
            className="object-cover"
            content="Wix"
          />
        </div>
      ),
      messageCount: 2,
    },
    description: "Develop a personalized fit...",
    members: (
      <div className="flex items-center -space-x-2 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <Avatar key={i}>
            <AvatarImage src={`https://avatar.iran.liara.run/public/girl`} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        ))}
      </div>
    ),

    categories: ["Automation", "E-commerce"],
    tags: ["#DigitalTransformation", "#Popular", "#Popular"],
    nextMeeting: "in 30 minutes",
  },
  {
    id: "2",
    brandName: {
      name: "Shopify",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/shopify-icon.svg"
            alt="shopify"
            width={20}
            height={20}
            className="object-cover"
            content="Shopify"
          />
        </div>
      ),
    },
    description: "Introduce a cloud-based p.. ",
    members: (
      <div className="flex items-center -space-x-2 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <Avatar key={i}>
            <AvatarImage src={`https://avatar.iran.liara.run/public/girl`} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        ))}
      </div>
    ),

    categories: ["Automation", "E-commerce"],
    tags: ["#DigitalTransformation", "#Popular", "#Popular"],
    nextMeeting: "in 30 minutes",
  },
  {
    id: "3",
    brandName: {
      name: "Mailchimp",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/mailchimp-icon.svg"
            alt="wix"
            width={20}
            height={20}
            className="object-cover"
            content="Wix"
          />
        </div>
      ),
    },
    description: "Introduce a cloud-based p.. ",
    members: (
      <div className="flex items-center -space-x-2 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <Avatar key={i}>
            <AvatarImage src={`https://avatar.iran.liara.run/public/girl`} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        ))}
      </div>
    ),

    categories: ["Automation", "E-commerce"],
    tags: ["#DigitalTransformation", "#Popular", "#Popular"],
    nextMeeting: "in 30 minutes",
  },
  {
    id: "4",
    brandName: {
      name: "Paypal",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/mailchimp-icon.svg"
            alt="wix"
            width={20}
            height={20}
            className="object-cover"
            content="Wix"
          />
        </div>
      ),
      messageCount: 7,
    },
    description: "Introduce a cloud-based p.. ",
    members: (
      <div className="flex items-center -space-x-2 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <Avatar key={i}>
            <AvatarImage src={`https://avatar.iran.liara.run/public/girl`} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        ))}
      </div>
    ),

    categories: ["Automation", "E-commerce"],
    tags: ["#DigitalTransformation", "#Popular", "#Popular"],
    nextMeeting: "in 30 minutes",
  },
  // ...
];
