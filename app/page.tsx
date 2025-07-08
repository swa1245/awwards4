import Canvas from "./(components)/Canvas";

export default function Home() {
  const canvasDetails = {
    startIndex: 0,
    numImages: 5,
    duration: 3000,
    size: 100,
    top: 20,
    left: 30,
    zIndex: 1,
  };
  return (
    <div>
      <div className="w-full min-h-screen bg-black text-white">
        <Canvas details={canvasDetails}/>
      </div>
    </div>
  );
}
