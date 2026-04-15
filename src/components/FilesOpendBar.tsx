import { useSelector } from "react-redux";
import { selectFileTreeRed } from "../features/fileTree/fileTree";
import FileBarItem from "./FileBarItem";

interface IFilesOpendBarProps {}

function FilesOpendBar({}: IFilesOpendBarProps) {
  const { openedFiles } = useSelector(selectFileTreeRed);

  return (
    <div>
      <ul className="flex gap-3 items-center ml-3">
        {openedFiles.map((fil) => (
          <FileBarItem file={fil} />
        ))}
      </ul>
    </div>
  );
}

export default FilesOpendBar;
