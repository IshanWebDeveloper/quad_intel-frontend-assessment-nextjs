"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import useStore from "@/store";

export function NavSearchInput() {
  const [searchTerms, setSearchTerms] = useState("");

  const setSearchTermsToStore = useStore((state) => state.setSearchTerms);

  useEffect(() => {
    setSearchTermsToStore(searchTerms);
  }, [searchTerms, setSearchTermsToStore]);
  return (
    <div className="flex items-center  border border-input rounded-md pl-2 gap-1">
      <Search className="w-5 h-5 " />
      <Input
        placeholder="Search for brands..."
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        className="ring-0 pl-0 w-full
        border-0
        focus:border-0 focus:ring-0 focus-visible:ring-0
        "
      />
    </div>
  );
}
