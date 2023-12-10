import readUserSession from "@/auth-actions/readUserSession";
import BannerComponent from "@/components/LandingPage/BannerComponent";
import DiscoverComponent from "@/components/LandingPage/DiscoverComponent";
import FeaturesComponent from "@/components/LandingPage/FeaturesComponent";
import LearnMoreComponent from "@/components/LandingPage/LearnMoreComponent";
import PartnerComponent from "@/components/LandingPage/PartnerComponent";
import PricingComponent from "@/components/LandingPage/PricingComponent";
import { redirect } from "next/navigation";

export default async function Home() {
    const { data } = await readUserSession();
    if (data.session) {
      return redirect("/learning");
    }
  return (
    <div>
      <BannerComponent />
      <DiscoverComponent />
      <FeaturesComponent />
      <PricingComponent />
      <PartnerComponent />
      <LearnMoreComponent />
    </div>
  );
}
