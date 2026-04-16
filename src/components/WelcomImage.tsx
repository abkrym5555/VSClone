interface IWelcomImageProps {
  image: string;
}

function WelcomImage({ image }: IWelcomImageProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={image} alt="welcome image" className="w-64 h-64" />
    </div>
  );
}

export default WelcomImage;
