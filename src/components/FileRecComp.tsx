import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomIcon from "./SVG/BottomIcon";

interface IFileComponentProps {
  filetree: IFile;
}

function FileRecComp({ filetree }: IFileComponentProps) {
  const [isopen, setIsopen] = useState(true);
  return (
    <div className="cursor-pointer ml-2">
      <div className="flex gap-1 items-center mb-2">
        {filetree.isFolder ? (
          <div className="flex gap-2" onClick={() => setIsopen((pr) => !pr)}>
            {isopen ? <BottomIcon /> : <RightArrowIcon />}
            <FolderIcon />
            <span>{filetree.name}</span>
          </div>
        ) : (
          <>
            <span className="ml-5"></span>
            <FileIcon />
            <span>{filetree.name}</span>
          </>
        )}
      </div>

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
