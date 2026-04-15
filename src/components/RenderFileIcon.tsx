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
        <ImgIcon ssrc="../../public/icons/folder-node-open.svg" />
      ) : (
        <ImgIcon ssrc="../../public/icons/folder-node.svg" />
      );
    if (extention === "public")
      return isopen ? (
        <ImgIcon ssrc="../../public/icons/folder-public-open.svg" />
      ) : (
        <ImgIcon ssrc="../../public/icons/folder-public.svg" />
      );
    if (extention === "src")
      return isopen ? (
        <ImgIcon ssrc="../../public/icons/folder-src-open.svg" />
      ) : (
        <ImgIcon ssrc="../../public/icons/folder-src.svg" />
      );
    if (extention === "components")
      return isopen ? (
        <ImgIcon ssrc="../../public/icons/folder-components-open.svg" />
      ) : (
        <ImgIcon ssrc="../../public/icons/folder-components.svg" />
      );
    else
      return isopen ? (
        <ImgIcon ssrc="../../public/icons/folder-default-open.svg" />
      ) : (
        <ImgIcon ssrc="../../public/icons/folder-default.svg" />
      );
  }

  // ************ files ****************************
  if (extention === "jsx")
    return <ImgIcon ssrc="../../public/icons/react.svg" />;
  if (extention === "js")
    return <ImgIcon ssrc="../../public/icons/javascript.svg" />;
  if (extention === "tsx")
    return <ImgIcon ssrc="../../public/icons/react_ts.svg" />;
  if (extention === "html")
    return <ImgIcon ssrc="../../public/icons/html.svg" />;
  else return <FileIcon />;
}

export default RenderFileIcon;
