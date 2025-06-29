import { Button } from "@/components/ui/button";
import reduxImg from "@/assets/download.png";
function Banner() {
  return (
    <div className="min-h-[calc(100vh-55px)] max-w-7xl flex items-center flex-col md:flex-row gap-8 py-8 lg:py-0">
      <div className="flex-1 h-full space-y-4 flex flex-col md:items-start  justify-between">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold">
          Task Managment by Redux
        </h1>
        <p className="opacity-80 text-md ">
          I use here Redux, React Router And many more..
        </p>
        <div className="flex gap-4 md:mt-4 ">
          <Button variant={"outline"}>Contact us</Button>
          <Button>Benifits</Button>
        </div>
      </div>
      <div className="flex-1 ">
        <img src={reduxImg} alt="logo" className="w-full mt-4" />
      </div>
    </div>
  );
}

export default Banner;
