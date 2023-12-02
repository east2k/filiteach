import readUserSession from "@/auth-actions/readUserSession";
import BannerComponent from "@/components/LandingPage/BannerComponent";
import DiscoverComponent from "@/components/LandingPage/DiscoverComponent";
import FeaturesComponent from "@/components/LandingPage/FeaturesComponent";
import LearnMoreComponent from "@/components/LandingPage/LearnMoreComponent";
import PartnerComponent from "@/components/LandingPage/PartnerComponent";
import PricingComponent from "@/components/LandingPage/PricingComponent";

export default async function Home() {

    return (
        <div className="pt-28">
            <BannerComponent />
            <DiscoverComponent />
            <FeaturesComponent />
            <PricingComponent />
            <PartnerComponent />
            <LearnMoreComponent />
        </div>
    );
}
