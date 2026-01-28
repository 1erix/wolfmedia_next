import AboutUs from "@/widgets/layouts/about_us"
import Communities from "@/widgets/layouts/communities";
import HelpBrends from "@/widgets/layouts/help_brends";
import HowWeWorks from "@/widgets/layouts/how_we_works";
import Managing from "@/widgets/layouts/managing";
import Questions from "@/widgets/layouts/questions";
import Statistic from "@/widgets/layouts/ui/statistic";

export default function Home() {
  return (
    <div className='page'>
      <Statistic />
      <AboutUs />
      <Communities />
      <HowWeWorks />

      <HelpBrends />

      <Managing />

      <Questions />
    </div>
  );
}
