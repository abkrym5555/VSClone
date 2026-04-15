import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
  activeTabId: string | null;
}
interface initStat {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: initStat = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
    activeTabId: null,
  },
};

const fileTreeSlice = createSlice({
  name: "fileTreeRed",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile>) => {
      state.openedFiles = [...state.openedFiles, action.payload];
    },
    setOnClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
      state.clickedFile.activeTabId = action.payload.activeTabId;
    },
  },
});
export const { setOpenedFiles, setOnClickedFile } = fileTreeSlice.actions;
export const selectFileTreeRed = (state: RootState) => state.fileTreeRed;
export default fileTreeSlice.reducer;
