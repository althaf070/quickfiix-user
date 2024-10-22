
const UserDashboard = () => {
  return (
    <>
    <div className="grid md:grid-cols-12 mt-5 min-h-screen ml-10">
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <div>
          <h1>Username</h1>
          <p>address</p>
          <p>phone number</p>
        </div>
      </div>
      <div className="col-span-3">
        <h1>Total service requesterd</h1>
        <h2>total service recieved</h2>
      </div>
      <div className="col-span-3">
        <h1>my reviews</h1>
      </div>
      <div className="col-span-1"></div>
    </div>
    </>
  )
}

export default UserDashboard