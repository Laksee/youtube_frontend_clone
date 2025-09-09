import { Appbar } from "./components/Appbar";
import { VideoCard } from "./components/VideoCard";
import { VideoGrid } from "./components/VideoGrid";



export default function Home() {
  return <div className="bg-stone-950">
    <Appbar />
    <div>
      <VideoGrid />
    </div>
  </div>
}
