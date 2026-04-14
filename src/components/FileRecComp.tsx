import FileIcon from "./SVG/FileIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";

interface IFileComponentProps {
  name: string;
}

function FileRecComp({ name }: IFileComponentProps) {
  return (
    <div className="flex gap-2 items-center">
      <RightArrowIcon />
      <FileIcon />
      <span>{name}</span>
    </div>
  );
}

export default FileRecComp;
