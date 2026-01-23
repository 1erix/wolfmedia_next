import AboutUs from "@/widgets/layouts/about_us"
import Communities from "@/widgets/layouts/communities";
import HowWeWorks from "@/widgets/layouts/how_we_works";
import Statistic from "@/widgets/layouts/statistic";

export default function Home() {
  return (
    <div className='page'>
      <Statistic />
      <AboutUs />
      <Communities />
      <HowWeWorks />
    </div>
  );
}
