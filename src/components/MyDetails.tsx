
import { formatDate, formatDatetime } from "@/lib/date";
import { useAuthStore } from "@/store/authStore"

const MyDetails = () => {
  const {user} = useAuthStore()


  return (
    <div className="p-4 bg-primarydarkgrey rounded-md shadow-xl md:flex justify-around">
        <div className="">
        <h1 className="text-3xl font-semibold text-silver">Profile</h1>
        <h1 className="text-2xl font-semibold capitalize">{user?.username}</h1>
            <p >Email:{user?.email}</p>
            <p>Phone Number: {user?.phoneNumber}</p>
            <p>Address :{user?.address}</p>
            <p>Location :{user?.district}</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-silver">Account Activity</h1>
          <p>Joined Date:{formatDate(user?.createdAt)}</p>
          <p>Last login {formatDatetime(user?.lastlogin)}</p>
        </div>
    </div>
  )
}

export default MyDetails