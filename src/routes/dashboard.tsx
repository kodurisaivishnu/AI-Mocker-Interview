import { Headings } from "@/components/headings"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Link } from "react-router"

const Dashboard = () => {

  return (
    <>
     <div className="flex w-full items-center justify-between">
      {/* headings */}
       <Headings title="Dashboard" description="Create and Start your Interview" />
       <Link to={"/generate/create"}>
          <Button size={"sm"}>
            <Plus /> Add New
          </Button>
        </Link>
      {/* content section */}
     </div>
    </>
  )
}

export default Dashboard
