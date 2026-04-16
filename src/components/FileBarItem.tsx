import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  selectFileTreeRed,
  setOnClickedFile,
  setOpenedFiles,
} from "../features/fileTree/fileTree";
import { useFileTreeDispatch } from "../app/hooks";
import { useSelector } from "react-redux";

interface IProps {
  file: IFile;
}

const FileBarItem = ({ file }: IProps) => {
  const fileDispatch = useFileTreeDispatch();
  const { clickedFile, openedFiles } = useSelector(selectFileTreeRed);

  const handelOnClick = () => {
    const { name, content } = file;
    fileDispatch(
      setOnClickedFile({
        fileName: name,
        fileContent: content,
        activeTabId: file.id,
      }),
    );
  };

  const handelRemoveItemBar = () => {
    const newBarItems = openedFiles.filter((fl) => fl.id !== file.id);
    console.log(newBarItems);
    fileDispatch(setOpenedFiles(newBarItems));
  };

  return (
    <div
      className={`max-w-3xl flex items-center p-2  border-t-2 ${clickedFile.activeTabId === file.id ? "border-cyan-700" : "border-transparent"}`}
      onClick={handelOnClick}
    >
      <RenderFileIcon fname={file.name} isfolder={false} isopen={false} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          handelRemoveItemBar();
        }}
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default FileBarItem;
