import { TableState } from "@tanstack/react-table";
import { create } from "zustand";

export type State = {
  selectedRowCount: number;
  searchTerms: string;
};

export type Actions = {
  setRowCount: (count: number) => void;
  setSearchTerms: (terms: string) => void;
};

const useStore = create<State & Actions>((set) => ({
  selectedRowCount: 0,
  searchTerms: "",
  tableRef: {} as TableState,
  setRowCount: (count) => set({ selectedRowCount: count }),
  setSearchTerms: (terms) => set({ searchTerms: terms }),
}));

export default useStore;
