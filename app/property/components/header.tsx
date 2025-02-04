"use client"
import { useState } from "react"
import AccountOption from "./AccountOption"

export default function PropertyHeader() {
    const [isAccountOptionVisible, setIsAccountOptionVisible] = useState(false)
    const toggleAccountOption = () => {
        setIsAccountOptionVisible(!isAccountOptionVisible)
        console.log(isAccountOptionVisible)
    }

    return (
        <div className="flex w-full h-16 px-5 justify-between items-center border-b border-slate-300 bg-slate-50">
            <div className="flex items-center gap-7">
                <p className="text-black font-lexend text-2xl font-normal leading-[36px] cursor-pointer">
                    LEASEEASE
                </p>
                <p className="text-black font-lexend text-base font-normal leading-[36px] cursor-pointer">
                    Lessor center
                </p>
            </div>

            <div className="flex p-2.5 justify-center items-center gap-3">
                <p className="text-slate-900 text-sm font-medium leading-5 p-4">
                    John Doe
                </p>
                <div className="w-[40px] h-[40px] rounded-full bg-cover bg-center cursor-pointer" style={{ backgroundImage: "url('https://loremflickr.com/40/40?random=1')" } } onClick={toggleAccountOption}></div>
                {/* add more detail */}
                {/* change sth to button */}
            </div>
            {isAccountOptionVisible && <AccountOption />}
        </div>

    )
}