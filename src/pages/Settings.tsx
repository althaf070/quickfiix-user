import MyDetails from "@/components/MyDetails"
import { Button } from "@/components/ui/button"


const Settings = () => {
  return (
    <div>
        <MyDetails/>
       <div className="mt-5">
       <Button>Edit My Profile</Button>
       </div>
    </div>
  )
}

export default Settings