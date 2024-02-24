import { useState } from "react";
import MobileListings from "./mobilelistings";
import NavMobile from "./navmobile";
import { formatDayjsDate } from "../../util/helpers";
import dayjs from "dayjs";
import MobileDashboard from "./mobiledashboard";

const initialState = {
  fromDate: formatDayjsDate(dayjs().subtract(3, "month")),
  toDate: formatDayjsDate(dayjs()),
};

export default function Mobile() {
  const [isScreenOpen, setIsScreenOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  function setScreen() {
    setIsScreenOpen((open) => !open);
    onClose();
  }
  function setScreenDashboard() {
    setIsScreenOpen(true);
    onClose();
  }
  function setScreenListing() {
    setIsScreenOpen(false);
    onClose();
  }

  return (
    <div className=" w-full h-screen">
      <NavMobile
        setScreenDashboard={setScreenDashboard}
        setScreenListing={setScreenListing}
      />
      {!isScreenOpen ? (
        <MobileListings
          isScreenOpen={isScreenOpen}
          open={open}
          onClose={onClose}
          showDrawer={showDrawer}
        />
      ) : (
        <MobileDashboard open={open} onClose={onClose} setScreen={setScreen} />
      )}
    </div>
  );
}
