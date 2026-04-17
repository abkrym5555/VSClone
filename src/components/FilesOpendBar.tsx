import { useSelector } from "react-redux";
import { selectFileTreeRed } from "../features/fileTree/fileTree";
import FileBarItem from "./FileBarItem";
import FileSyntaxHilighter from "./FileSyntaxHilighter";
import WelcomImage from "./WelcomImage";
import { useState } from "react";
import MenueBar from "./ui/MenueBar";

function FilesOpendBar() {
  const { openedFiles, clickedFile } = useSelector(selectFileTreeRed);
  const [showMenu, setShowMenu] = useState(false);
  const [posMenu, setposMenu] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  return (
    <div>
      <div
        className={`flex gap-3 items-center  border-b border-b-gray-700 ${openedFiles.length <= 0 ? "hidden" : ""}`}
        onContextMenu={(e) => {
          e.preventDefault();
          setposMenu({ x: e.pageX, y: e.pageY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((fil) => (
          <FileBarItem setShowMenu={setShowMenu} file={fil} key={fil.id} />
        ))}
      </div>

      {openedFiles.length ? (
        <FileSyntaxHilighter code={clickedFile.fileContent || ""} />
      ) : (
        <WelcomImage image="../../public/icons/vscode.svg" />
      )}
      {showMenu && openedFiles.length > 0 && (
        <MenueBar setShowMenu={setShowMenu} pos={posMenu} />
      )}
    </div>
  );
}

export default FilesOpendBar;
