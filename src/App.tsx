import FileRecComp from "./components/FileRecComp";
import FilesOpendBar from "./components/FilesOpendBar";
import { fileTree } from "./data";

function App() {
  return (
    <div className="overflow-hidden ">
      <div className="flex h-screen p-5">
        <div className="w-64 border-r-2 ">
          <FileRecComp filetree={fileTree} />
        </div>
        <FilesOpendBar />
      </div>
    </div>
  );
}

export default App;
