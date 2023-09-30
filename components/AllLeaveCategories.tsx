import React from "react";
import Image from "next/image";
import Card from "./Card";
import sickIcon from "../public/assets/sick-icon.svg";
import vacationIcon from "../public/assets/vacation-icon.svg";
import holidayIcon from "../public/assets/holiday-icon.svg";
import unpaidicon from "../public/assets/unpaid-icon.svg";

const AllLeaveCategories = () => {
    return (
        <div className="grid grid-cols-12 gap-x-4 mb-6">
            {/* Sick category leave*/}
            <Card>
                <div className="flex items-center gap-[6px]">
                    <Image src={sickIcon} alt="" />
                    <span className="font-medium text-[14px]">Sick</span>
                </div>
                <div className="font-normal text-[#77777A]">
                    <p className="text-[12px]">
                        {" "}
                        <span className="text-[#46464A] text-[13px]">4</span> Taken
                    </p>
                    <p className="text-[12px]">
                        {" "}
                        <span>2</span> days scheduled
                    </p>
                </div>
            </Card>

            {/* Vacation category leave */}
            <Card>
                <div className="flex items-center gap-[6px]">
                    <Image src={vacationIcon} alt="" />
                    <span className="font-medium text-[14px]">Vacation</span>
                </div>
                <div className="font-normal text-[#77777A]">
                    <p className="text-[12px]">
                        {" "}
                        <span className="text-[#46464A]">9/4</span> Available
                    </p>
                    <p className="text-[12px]">
                        {" "}
                        <span>2</span> days scheduled
                    </p>
                </div>
            </Card>
            {/* Holidays category leave */}
            <Card>
                <div className="flex items-center gap-[6px]">
                    <Image src={holidayIcon} alt="" />
                    <span className="font-medium text-[14px]">Holidays</span>
                </div>
                <div className="font-normal text-[#77777A]">
                    <p className="text-[12px]">
                        {" "}
                        <span className="text-[#46464A]">4</span> Left
                    </p>
                    <p className="text-[12px]"> 6th December next</p>
                </div>
            </Card>

            {/* Unpaid category leave */}
            <Card>
                <div className="flex items-center gap-[6px]">
                    <Image src={unpaidicon} alt="" />
                    <span className="font-medium text-[14px]">Unpaid</span>
                </div>
                <div className="font-normal text-[#77777A]">
                    <p className="text-[12px]">
                        {" "}
                        <span className="text-[#46464A]">4</span> Taken
                    </p>
                    <p className="text-[12px]">
                        {" "}
                        <span>2</span> days scheduled
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default AllLeaveCategories;