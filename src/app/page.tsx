import AboutUs from "@/widgets/layouts/about_us";
import Statistic from "@/widgets/layouts/statistic";

export default function Home() {
  return (
    <div className='page'>
      <Statistic />
      <AboutUs />
    </div>
  );
}
