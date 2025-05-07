import { BackgroundCircles } from "../components/background-circles";
import Navbar from "../components/navbar";
import { TimelineDemo } from "../components/timelinev2";
import { Footer } from "../components/footer";
export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <BackgroundCircles />
      <div>
        <TimelineDemo />
      </div>
      {/* <div className="flex justify-center items-center h-screen bg-[#0a0e1a]"> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}
