import ImgIcon from "./ImgIcon";
import FileIcon from "./SVG/FileIcon";

interface IRenderFileIconProps {
  fname: string;
  isfolder: boolean;
  isopen: boolean;
}

function RenderFileIcon({ fname, isfolder, isopen }: IRenderFileIconProps) {
  const extention = fname.split(".").pop();

  if (isfolder) {
    if (extention === "node_modules")
      return isopen ? (
        <ImgIcon ssrc="/icons/folder-node-open.svg" />
      ) : (
        <ImgIcon ssrc="/icons/folder-node.svg" />
      );
    if (extention === "public")
      return isopen ? (
        <ImgIcon ssrc="/icons/folder-public-open.svg" />
      ) : (
        <ImgIcon ssrc="/icons/folder-public.svg" />
      );
    if (extention === "src")
      return isopen ? (
        <ImgIcon ssrc="/icons/folder-src-open.svg" />
      ) : (
        <ImgIcon ssrc="/icons/folder-src.svg" />
      );
    if (extention === "components")
      return isopen ? (
        <ImgIcon ssrc="/icons/folder-components-open.svg" />
      ) : (
        <ImgIcon ssrc="/icons/folder-components.svg" />
      );
    else
      return isopen ? (
        <ImgIcon ssrc="/icons/folder-default-open.svg" />
      ) : (
        <ImgIcon ssrc="/icons/folder-default.svg" />
      );
  }

  // ************ files ****************************
  if (extention === "jsx")
    return <ImgIcon ssrc="/icons/react.svg" />;
  if (extention === "js")
    return <ImgIcon ssrc="/icons/javascript.svg" />;
  if (extention === "tsx")
    return <ImgIcon ssrc="/icons/react_ts.svg" />;
  if (extention === "html")
    return <ImgIcon ssrc="/icons/html.svg" />;
  else return <FileIcon />;
}

export default RenderFileIcon;
