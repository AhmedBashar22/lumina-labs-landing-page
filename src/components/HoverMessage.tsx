const HoverMessage = ({
  message,
}: {
  message: string
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full backdrop-blur-sm bg-opacity-60 bg-black text-white font-bold">
      {message}
    </div>
  );
}
 
export default HoverMessage;