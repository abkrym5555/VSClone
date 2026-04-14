import FileRecComp from "./components/FileRecComp";
import { fileTree } from "./data";

function App() {
  return (
    <div className="m-7">
      <FileRecComp filetree={fileTree} />
    </div>
  );
}

export default App;
