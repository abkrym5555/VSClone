import { useSelector } from "react-redux";
import FileRecComp from "./components/FileRecComp";
import FilesOpendBar from "./components/FilesOpendBar";
import { fileTree } from "./data";
import { selectFileTreeRed } from "./features/fileTree/fileTree";

function App() {
  const { clickedFile } = useSelector(selectFileTreeRed);

  return (
    <div className=" ">
      <div className="flex h-screen ">
        <div className="w-64 border-r-2 border-gray-700 pt-3">
          <FileRecComp filetree={fileTree} />
        </div>
        <div>
          <FilesOpendBar />
          <div className="w-lg">{clickedFile.fileContent}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
