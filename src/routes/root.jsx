'use client';

import {useState} from "react";
import {Flowbite} from "flowbite-react";
import LeftBar from "../components/leftbar.jsx";

export default function Root() {
    const [leftBarActive, setLeftBarActive] = useState(false);

    return (
        <div className={"flex flex-col h-screen max-h-screen bg-gray-50 dark:bg-gray-900"}>
            <Flowbite>
                <div className={"flex flex-grow"}>
                    <LeftBar leftBarActive={leftBarActive}/>
                    <div className={"p-4"}></div>
                </div>
            </Flowbite>
        </div>
    )
}