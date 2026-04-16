import { useSelector } from "react-redux";
import { selectFileTreeRed } from "../features/fileTree/fileTree";
import FileBarItem from "./FileBarItem";
import FileSyntaxHilighter from "./FileSyntaxHilighter";
import WelcomImage from "./WelcomImage";

function FilesOpendBar() {
  const { openedFiles, clickedFile } = useSelector(selectFileTreeRed);

  return (
    <div>
      <div
        className={`flex gap-3 items-center  border-b border-b-gray-700 ${openedFiles.length <= 0 ? "hidden" : ""}`}
      >
        {openedFiles.map((fil) => (
          <FileBarItem file={fil} />
        ))}
      </div>

      {openedFiles.length ? (
        <FileSyntaxHilighter code={clickedFile.fileContent} />
      ) : (
        <WelcomImage image="../../public/icons/vscode.svg" />
      )}
    </div>
  );
}

export default FilesOpendBar;
