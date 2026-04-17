import { useEffect, useRef } from "react";

interface IMenueBarProps {
  pos: { x: number; y: number };
}

function MenueBar({ pos }: IMenueBarProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(menuRef);
  }, []);

  return (
    <div ref={menuRef}>
      <ul
        className={`bg-white text-black w-fit rounded-md p-3 absolute    `}
        style={{ position: "absolute", left: pos.x, top: pos.y }}
      >
        <li className="text-inherit">close</li>
        <li className="text-inherit">close all</li>
      </ul>
    </div>
  );
}

export default MenueBar;
