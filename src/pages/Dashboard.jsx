import {Card, Timeline} from "flowbite-react";
import {ReportLineChart, ReportRadarChart} from "../components/Charts";
import {RiMapPinTimeLine} from "react-icons/ri";
import Auth from "../utils/Auth";
import Breadcrumb from "../components/Breadcrumb";
import EmptyIcon from "../assets/icons/div.svg";

const Dashboard = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-secondary">Dashboard</h2>
        <Breadcrumb model={model} />
      </div>
      <main className="flex gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <Card>
              <h2 className="text-secondary text-xl">
                Present <span className="text-sm text-slate-300">| Today</span>
              </h2>
              <div className={`flex px-5`}>
                <img src={EmptyIcon} />
                <div className="flex flex-col">
                  <p className="text-xl text-secondary font-bold px-3">145</p>
                  <p className="text-xs flex gap-2 text-title font-bold px-3">
                    12% <span className="text-[#6C757D] font-normal">increase</span>
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <h2 className="text-secondary text-xl">
                Absent <span className="text-sm text-slate-300">| Today</span>
              </h2>
              <div className={`flex px-5`}>
                <img src={EmptyIcon} />
                <div className="flex flex-col">
                  <p className="text-xl text-secondary font-bold px-3">145</p>
                  <p className="text-xs flex gap-2 text-title font-bold px-3">
                    12% <span className="text-[#6C757D] font-normal">increase</span>
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <h2 className="text-secondary text-xl">
                Attendance <span className="text-sm text-slate-300">| Today</span>
              </h2>
              <div className={`flex px-5`}>
                <img src={EmptyIcon} />
                <div className="flex flex-col">
                  <p className="text-xl text-secondary font-bold px-3">145</p>
                  <p className="text-xs flex gap-2 text-title font-bold px-3">
                    12% <span className="text-[#6C757D] font-normal">increase</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card>
              <h2 className="text-secondary text-xl px-5 py-2">
                Reports <span className="text-sm text-slate-300">| Today</span>
              </h2>
              <ReportLineChart />
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {Auth.adminRole() && (
            <Card className="w-96 px-5">
              <h2 className="text-secondary text-xl">
                Recent Activities <span className="text-sm text-slate-300">| Today</span>
              </h2>
              <Timeline>
                <Timeline.Item>
                  <Timeline.Point icon={RiMapPinTimeLine} />
                  <Timeline.Content>
                    <Timeline.Time>Tuesday</Timeline.Time>
                    <Timeline.Title className="text-sm">2 Teacher Added into teacher list</Timeline.Title>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={RiMapPinTimeLine} />
                  <Timeline.Content>
                    <Timeline.Time>Monday</Timeline.Time>
                    <Timeline.Title className="text-sm">30 Absent requests on Math need confirmation</Timeline.Title>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={RiMapPinTimeLine} />
                  <Timeline.Content>
                    <Timeline.Time>Sunday</Timeline.Time>
                    <Timeline.Title className="text-sm">Application updated to latest version</Timeline.Title>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>
            </Card>
          )}
          <Card>
            <h2 className="text-secondary text-xl">
              Attendance Report <span className="text-sm text-slate-300">| This Month</span>
            </h2>
            <ReportRadarChart />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
