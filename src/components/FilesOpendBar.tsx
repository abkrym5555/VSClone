import { useSelector } from "react-redux";
import { selectFileTreeRed } from "../features/fileTree/fileTree";
import FileBarItem from "./FileBarItem";

function FilesOpendBar() {
  const { openedFiles } = useSelector(selectFileTreeRed);

  return (
    <div>
      <ul className="flex gap-3 items-center  border-b border-b-gray-700">
        {openedFiles.map((fil) => (
          <FileBarItem file={fil} />
        ))}
      </ul>
    </div>
  );
}

export default FilesOpendBar;
