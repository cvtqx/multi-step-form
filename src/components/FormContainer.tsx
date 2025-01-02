// import BannerMobile from "../assets/images/bg-sidebar-mobile.svg";

import { CardContent } from "./CardContent";
import MobileBanner from "./MobileBanner"
import SideNav from "./SideNav"

export default function FormContainer() {
  return (
    <div className="flex flex-col md:flex-row rounded-lg md:place-self-center md:w-5/6 max-w-[925px] md:bg-base-100  shadow-xl md:h-[525px]">
      <SideNav />
      <MobileBanner/>
      <div className="card-body basis-3/4">
        <CardContent />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}
