'use client';

import {useState} from "react";
import {Flowbite} from "flowbite-react";
import Header from "../components/header.jsx";
import LeftBar from "../components/leftbar.jsx";
import CategoryView from "../components/categoryView.jsx";
import RepositoryView from "../components/repositoryView.jsx";

export default function Root() {
    let isDark = localStorage.getItem("theme") === "dark";
    const [leftBarActive, setLeftBarActive] = useState(false);

    return (
        <div className={"flex flex-col h-screen max-h-screen bg-gray-50 dark:bg-gray-900"}>
            <Flowbite theme={{dark: isDark}}>
                <Header leftBarActive={leftBarActive === true} toggleLeftBar={() => setLeftBarActive(!leftBarActive)}/>
                <div className={"flex flex-grow"}>
                    <LeftBar leftBarActive={leftBarActive}/>
                    <div className={"flex flex-col flex-grow"}>
                        <CategoryView/>
                        <RepositoryView/>
                    </div>
                </div>
            </Flowbite>
        </div>
    )
}