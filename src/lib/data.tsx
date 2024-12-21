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
      messages: 2,
    },
    description: "A phone",
    members: ["John Doe", "Jane Doe"],
    categories: ["Electronics", "Phones"],
    tags: ["New", "Popular"],
    nextMeeting: "2022-01-01",
  },
  // ...
];
