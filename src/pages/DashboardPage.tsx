import MyDetails from "@/components/MyDetails";
import { useLogStore } from "@/store/logStore";
import { Services } from "@/store/serviceStore";
import { Loader } from "lucide-react";
import { useEffect } from "react";

export const Dashboard = () => {
  const { getLogs, logs, isLoading,getDashboardData,dashboardData } = useLogStore();
  useEffect(() => {
    getLogs("5");
    getDashboardData()
  }, []);
  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full justify-center items-center">
        <Loader className="animate-spin" size={34} />
      </div>
    );
  }
  return (
    <div className=" w-full">
      <h1 className="text-2xl lg:text-6xl text-center font-semibold mb-3">
        Welcome To Dashboard
      </h1>
      <MyDetails />
      <div className="grid md:grid-cols-12 mt-5 gap-5 mx-3 mr-8">
      <div className="col-span-4 p-5 rounded-lg shadow-lg bg-primarygrey">
          <h1 className="text-center text-4xl font-bold">{dashboardData?.bookedServicesCount}</h1>
          <p className="text-2xl text-center font-semibold">Currently Booked Services</p>
        </div>

        {/* Total Services Received */}
        <div className="col-span-4 p-5 rounded-lg shadow-lg bg-primarygrey">
          <h1 className="text-center text-4xl font-bold">{dashboardData?.totalServicesReceivedCount}</h1>
          <p className="text-2xl text-center font-semibold">Total Services Received</p>
        </div>

        {/* Total Services Requested */}
        <div className="col-span-4 p-5 rounded-lg shadow-lg bg-primarygrey">
          <h1 className="text-center text-4xl font-bold">{dashboardData?.totalServicesRequestedCount}</h1>
          <p className="text-2xl text-center font-semibold">Total Services Requested</p>
        </div>

        {/* My Ongoing Services */}
        <div className="p-5 col-span-4 bg-accentblue rounded-lg shadow-xl">
          <h1 className="text-center text-4xl font-semibold">My Ongoing Services</h1>
          <div>
            <ul className="text-xl font-semibold mt-3">
            {dashboardData?.ongoingServices && dashboardData.ongoingServices.length > 0 ? (
                dashboardData.ongoingServices.map((service: Services) => (
                  <li key={service._id}>{service.servicename}</li>
                ))
              ) : (
                <li>No ongoing services</li>
              )}
            </ul>
          </div>
        </div>


        <div className="col-span-5 bg-fieryOrange p-5 rounded-lg shadow-lg">
          <h1 className="text-center text-4xl font-semibold">
            My Recent activities
          </h1>
          <div>
            <ul className="text-lg font-semibold mt-3">
              {logs?.length > 0
                ? logs.map((log) => (
                    <li key={log._id}>
                      {log.status
                        ? `Your booking of ${log.service.servicename} is ${
                            log.status
                          }${
                            log.status === "canceled" && log.cancelledByProvider
                              ? " by Provider"
                              : ""
                          }`
                        : "Transactions"}
                    </li>
                  ))
                : "No activities"}
            </ul>
          </div>
        </div>
        <div className="col-span-3 bg-primarygrey p-5 rounded-lg shadow-lg">
          <h1 className="text-center text-2xl font-semibold">
            Recent Transactions
          </h1>
          <div>
            <ul className="text-xl font-semibold mt-3 text-silver">
              <li>booked a service</li>
              <li>cancelled a service</li>
              <li>reviewed a provider</li>
              <li>favourited a provider</li>
              <li>payment completed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
