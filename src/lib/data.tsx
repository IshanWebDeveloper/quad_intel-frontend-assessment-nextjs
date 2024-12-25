import { Product } from "@/components/data-table/columns";
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
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Automation"],
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
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["B2B", "E-commerce"],
    tags: ["#OnlineShopping", "#DigitalTransformation"],
    nextMeeting: "Tomorrow",
  },
  {
    id: "3",
    brandName: {
      name: "Mailchimp",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/mailchimp-icon.svg"
            alt="mailchimp"
            width={20}
            height={20}
            className="object-cover"
            content="Mailchimp"
          />
        </div>
      ),
    },
    description: "Develop a mobile app aim... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["SAAS", "Mobile"],
    tags: ["#TechInnovation", "#CloudComputing"],
    nextMeeting: "Tomorrow",
  },
  {
    id: "4",
    brandName: {
      name: "Paypal",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/paypal-svgrepo-com.svg"
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
    description: "This program could includ.. ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Marketplace"],
    tags: ["#BuySellOnline", "#OnlineShopping"],
    nextMeeting: "in 6 hours",
  },
  {
    id: "5",
    brandName: {
      name: "Disney",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/disney-icon.svg"
            alt="disney"
            width={20}
            height={20}
            className="object-cover"
            content="Disney"
          />
        </div>
      ),
      messageCount: 7,
    },
    description: "Introduce a B2B solution f... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["B2B", "B2C"],
    tags: ["#BusinessPartnerships"],
    nextMeeting: "No contact",
  },

  {
    id: "6",
    brandName: {
      name: "Intercom",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="/brands/intercom-2.svg"
            alt="intercom"
            width={20}
            height={20}
            className="object-cover"
            content="Intercom"
          />
        </div>
      ),
      messageCount: 9,
    },
    description: "Implement an AI-driven C... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Technology", "SAAS"],
    tags: ["#SmartFinance", "#SaasProducts"],
    nextMeeting: "in 1 hour",
  },
  {
    id: "7",
    brandName: {
      name: "Google",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="brands\google-color-icon.svg"
            alt="google"
            width={20}
            height={20}
            className="object-cover"
            content="Google"
          />
        </div>
      ),
      messageCount: 5,
    },
    description: "Offer a comprehensive cy... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Finance", "Automation"],
    tags: ["#SmartFinance"],
    nextMeeting: "in 30 minutes",
  },
  {
    id: "8",
    brandName: {
      name: "Evernote",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="brands\evernote-icon.svg"
            alt="evernote"
            width={20}
            height={20}
            className="object-cover"
            content="Evernote"
          />
        </div>
      ),
    },
    description: "This could include smart li... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Transportation"],
    tags: ["#LogisticsTech", "#UX"],
    nextMeeting: "Next month",
  },
  {
    id: "9",
    brandName: {
      name: "Microsoft",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="brands\microsoft-icon.svg"
            alt="microsoft"
            width={20}
            height={20}
            className="object-cover"
            content="Microsoft"
          />
        </div>
      ),
      messageCount: 14,
    },
    description: "Launch an advisory servic... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Publishing", "B2C"],
    tags: ["#B2CMarketing", "#RetailIT"],
    nextMeeting: "No contact",
  },
  {
    id: "10",
    brandName: {
      name: "Invision",
      logo: (
        <div className="rounded-sm w-5 h-5 bg-white flex flex-col items-center justify-center">
          <Image
            src="brands\invision-icon.svg"
            alt="invision"
            width={20}
            height={20}
            className="object-cover"
            content="Microsoft"
          />
        </div>
      ),
    },
    description: "The tool would analyze tre... ",
    members: Math.floor(Math.random() * 10) + 1,

    categories: ["Web Services"],
    tags: ["#APIIntegration"],
    nextMeeting: "Next month",
  },

  {},
];
