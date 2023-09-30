"use client"

import Image from "next/image";
import dashboardIcon from "../public/assets/dashboard-icon.svg";
import calenderIcon from "../public/assets/calender-icon.svg";
import teamIcon from "../public/assets/team-icon.svg";
import policyIcon from "../public/assets/policy-icon.svg";
import AddNewLeaveButton from "./AddNewLeaveButton";
import { Button } from '@mui/material'

const Sidebar = () => {
    return (
        <div className="col-span-2">
            <div className="sidebar-area px-[9px] pt-6 h-full">

                <AddNewLeaveButton />

                {/*All sidebar menu */}
                <div>
                    <Button className=" w-full dashboard-menu py-[10px]  hover:bg-[#538DFF4D] mb-2 pl-6 flex justify-start gap-6 items-center">
                        <Image src={dashboardIcon} alt="" />
                        <span>Dashboard</span>
                    </Button>
                    <Button className=" w-full dashboard-menu py-[10px]  hover:bg-[#538DFF4D] mb-2 pl-6 flex justify-start gap-6 items-center">
                        <Image src={calenderIcon} alt="" />
                        <span>My Leaves</span>
                    </Button>
                    <Button className=" w-full dashboard-menu py-[10px]  hover:bg-[#538DFF4D] mb-2 pl-6 flex justify-start gap-6 items-center">
                        <Image src={teamIcon} alt="" />
                        <span>My Leaves</span>
                    </Button>
                    <Button className=" w-full dashboard-menu py-[10px]  hover:bg-[#538DFF4D] mb-2 pl-6 flex justify-start gap-6 items-center">
                        <Image src={policyIcon} alt="" />
                        <span className="font-medium">Leave Policy</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar