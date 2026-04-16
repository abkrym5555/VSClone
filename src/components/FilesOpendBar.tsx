import { useSelector } from "react-redux";
import { selectFileTreeRed } from "../features/fileTree/fileTree";
import FileBarItem from "./FileBarItem";
import FileSyntaxHilighter from "./FileSyntaxHilighter";

function FilesOpendBar() {
  const { openedFiles, clickedFile } = useSelector(selectFileTreeRed);

  return (
    <div>
      <div className="flex gap-3 items-center  border-b border-b-gray-700">
        {openedFiles.map((fil) => (
          <FileBarItem file={fil} />
        ))}
      </div>
      <FileSyntaxHilighter code={clickedFile.fileContent} />
    </div>
  );
}

export default FilesOpendBar;
