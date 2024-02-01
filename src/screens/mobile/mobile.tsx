import MobileListings from "./mobilelistings";
import NavMobile from "./navmobile";

export default function Mobile() {
  return (
    <div className="bg-gray-300 w-full ">
      <NavMobile />
      <MobileListings />
    </div>
  );
}
