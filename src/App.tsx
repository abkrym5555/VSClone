import FileRecComp from "./components/FileRecComp";
import FilesOpendBar from "./components/FilesOpendBar";
import { fileTree } from "./data";

function App() {
  return (
    <div className="flex">
      <div className="w-64 border-r-2 border-gray-700 pt-3">
        <FileRecComp filetree={fileTree} />
      </div>
      <div className="w-screen">
        <FilesOpendBar />
      </div>
    </div>
  );
}

export default App;
