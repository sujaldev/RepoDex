import {Navbar, TextInput} from "flowbite-react";


export default function RepositoryView () {
    return (
        <div className={"flex flex-col flex-grow"}>
            <Navbar className={"border-b border-gray-300 dark:border-gray-700 py-1"}>
                <TextInput type={"text"} placeholder={"Search"}/>
            </Navbar>
            <div className={"flex flex-grow"}>
            </div>
        </div>
    )
}