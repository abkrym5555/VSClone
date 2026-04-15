interface IImgIconProps {
  ssrc: string;
}

function ImgIcon({ ssrc }: IImgIconProps) {
  return (
    <div className="w-5 h-5">
      <img src={ssrc} alt="icon" />
    </div>
  );
}

export default ImgIcon;
