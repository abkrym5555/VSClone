import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { IFile } from "../../interfaces";

interface initStat {
  openedFiles: IFile[];
  clickedFile: {
    fileName: string;
    fileContent: string;
  };
}

const initialState: initStat = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTreeRed",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile>) => {
      state.openedFiles = [...state.openedFiles, action.payload];
    },
  },
});
export const { setOpenedFiles } = fileTreeSlice.actions;
export const selectFileTreeRed = (state: RootState) => state.fileTreeRed;
export default fileTreeSlice.reducer;
