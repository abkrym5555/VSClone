import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomIcon from "./SVG/BottomIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useFileTreeDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import {
  selectFileTreeRed,
  setOnClickedFile,
  setOpenedFiles,
} from "../features/fileTree/fileTree";
import { isFileExit } from "../utils";

interface IFileComponentProps {
  filetree: IFile;
}

function FileRecComp({ filetree }: IFileComponentProps) {
  const [isopen, setIsopen] = useState(true);
  const { openedFiles } = useSelector(selectFileTreeRed);
  const fileDispatch = useFileTreeDispatch();

  const handelFileclick = () => {
    fileDispatch(
      setOnClickedFile({
        activeTabId: filetree.id,
        fileContent: filetree.content,
        fileName: filetree.name,
      }),
    );

    if (isFileExit(openedFiles, filetree.id)) return;

    fileDispatch(setOpenedFiles([...openedFiles, filetree]));
  };
  return (
    <div className="cursor-pointer ml-2">
      <div className="flex gap-1 items-center mb-2">
        {filetree.isFolder ? (
          //*** folder
          <div className="flex gap-2" onClick={() => setIsopen((pr) => !pr)}>
            {isopen ? <BottomIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              fname={filetree.name}
              isfolder={filetree.isFolder}
              isopen={isopen}
            />
            <span>{filetree.name}</span>
          </div>
        ) : (
          //*** file
          <div
            className="flex gap-1 items-center mb-2"
            onClick={handelFileclick}
          >
            <span className="ml-5"></span>
            <RenderFileIcon
              fname={filetree.name}
              isfolder={filetree.isFolder}
              isopen={isopen}
            />
            <span>{filetree.name}</span>
          </div>
        )}
      </div>
      {/* re render components */}
      {isopen
        ? filetree.children &&
          filetree.children.map((file) => (
            <FileRecComp key={filetree.id} filetree={file} />
          ))
        : null}
    </div>
  );
}

export default FileRecComp;
