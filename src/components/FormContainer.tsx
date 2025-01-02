import SideNavBackground from "../assets/images/bg-sidebar-desktop.svg";
import BannerMobile from "../assets/images/bg-sidebar-mobile.svg";

export default function FormContainer() {
  return (
    <div className="md:place-self-center card md:card-side md:w-5/6 max-w-[925px] bg-base-100  shadow-xl">
      {/* <figure>
        <img
          src={SideNavBackground}
          alt="purple sidebar"
          className="hidden md:block"
        />
        <img
          src={BannerMobile}
          alt="purple banner on mobile screen"
          className="md:hidden"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p>Description.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}
