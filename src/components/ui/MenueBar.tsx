import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  selectFileTreeRed,
  setOpenedFiles,
} from "../../features/fileTree/fileTree";
import { useFileTreeDispatch } from "../../app/hooks";

interface IMenueBarProps {
  pos: { x: number; y: number };
  setShowMenu: (val: boolean) => void;
}

function MenueBar({ pos, setShowMenu }: IMenueBarProps) {
  const { openedFiles, idItemBarToRemove } = useSelector(selectFileTreeRed);

  const disRmoveBarIttem = useFileTreeDispatch();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handelClicke = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", handelClicke);

    //cleanup fun
    return () => {
      window.removeEventListener("click", handelClicke);
    };
  }, [setShowMenu]);

  const handelCloseItemBar = () => {
    const newBarItems = openedFiles.filter((fl) => fl.id !== idItemBarToRemove);
    disRmoveBarIttem(setOpenedFiles(newBarItems));
  };
  return (
    <div ref={menuRef} onContextMenu={(e) => e.preventDefault()}>
      <ul
        className={`bg-white text-black w-22 rounded-md p-3 absolute  cursor-pointer  `}
        style={{ position: "absolute", left: pos.x, top: pos.y }}
      >
        <li
          className="text-inherit hover:font-bold"
          onClick={handelCloseItemBar}
        >
          close
        </li>
        <li
          className="text-inherit hover:font-bold"
          onClick={() => disRmoveBarIttem(setOpenedFiles([]))}
        >
          close all
        </li>
      </ul>
    </div>
  );
}

export default MenueBar;
