import { create } from "zustand";

export type State = {
  selectedRowCount: number;
};

export type Actions = {
  setRowCount: (count: number) => void;
};

const useStore = create<State & Actions>((set) => ({
  selectedRowCount: 0,
  setRowCount: (count) => set({ selectedRowCount: count }),
}));

export default useStore;
