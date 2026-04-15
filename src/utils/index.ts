import type { IFile } from "../interfaces";

export const isFileExit = (arr: IFile[], id: string) => {
  return arr.some((fil) => fil.id === id);
};
