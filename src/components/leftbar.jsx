import {Button, Sidebar, TextInput} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export default function LeftBar({leftBarActive}) {
    return (
        <Sidebar
            id={"leftbar"}
            className={
                "border-r border-gray-300 dark:border-gray-700 -translate-x-full sm:translate-x-0 fixed sm:relative transition-transform" + (
                    leftBarActive ? " transform-none" : ""
                )
        }>
            <div className={"flex flex-row gap-2"}>
                <TextInput type={"text"} placeholder={"Your GitHub username"} className={"pt-0.5"}/>
                <Button color={"gray"}>
                    <FontAwesomeIcon icon={faSearch} className={"py-1"}/>
                </Button>
            </div>
        </Sidebar>
    )
}