import { Group, Panel } from "react-resizable-panels";
import FileRecComp from "./FileRecComp";
import { fileTree } from "../data";
import FilesOpendBar from "./FilesOpendBar";

function ResizePanal() {
  return (
    <Group>
      <Panel
        defaultSize="25%"
        collapsible
        minSize={200}
        className="border-r-3 border-gray-700 h-screen overflow-hidden"
      >
        <div className="w-64  pt-3">
          <FileRecComp filetree={fileTree} />
        </div>
      </Panel>
      <Panel collapsible={false} minSize={200}>
        <FilesOpendBar />
      </Panel>
    </Group>
  );
}

export default ResizePanal;
