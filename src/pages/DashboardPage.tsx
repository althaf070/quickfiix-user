import MyDetails from "@/components/MyDetails"

export const Dashboard = () => {
    return (
      <div className=" w-full">
      <h1 className="text-2xl lg:text-6xl text-center font-semibold mb-3">Welcome To Dashboard</h1>
  <MyDetails/>
      <div className="grid md:grid-cols-12 mt-5 gap-5 mx-3 mr-8">
  
        <div className="col-span-4 p-5 rounded-lg shadow-lg bg-primarygrey">
          <h1 className="text-center text-4xl font-bold">5+</h1>
          <p className="text-2xl text-center font-semibold">Currently Booked Services</p>
        </div>
        <div className="col-span-4 p-5 rounded-lg shadow-lg bg-primarygrey">
          <h1 className="text-center text-4xl font-bold">40+</h1>
          <p className="text-2xl text-center font-semibold">Total  Services Recieved</p>
        </div>
        <div className="col-span-4 p-5 rounded-lg shadow-lg bg-primarygrey">
          <h1 className="text-center text-4xl font-bold">20+</h1>
          <p className="text-2xl text-center font-semibold">Total  Services Requested</p>
        </div> 
  
      <div className="p-5 col-span-4 bg-accentblue rounded-lg shadow-xl">
        <h1 className="text-center text-4xl font-semibold">My Ongoing Services</h1>
        <div>
          <ul className="text-xl font-semibold mt-3">
            <li>first service</li>
            <li>first service</li>
            <li>first service</li>
            <li>first service</li>
          </ul>
        </div>
      </div>
  
      <div className="col-span-5 bg-fieryOrange p-5 rounded-lg shadow-lg">
      <h1 className="text-center text-4xl font-semibold">My Recent activities</h1>
      <div>
          <ul className="text-xl font-semibold mt-3">
            <li>booked a service</li>
            <li>cancelled a service</li>
            <li>reviewed a provider</li>
            <li>favourited a provider</li>
            <li>payment completed</li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 bg-primarygrey p-5 rounded-lg shadow-lg">
      <h1 className="text-center text-2xl font-semibold">Recent Transactions</h1>
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
    )
  }
  