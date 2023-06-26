import {useState} from "react";
import {Navbar, TextInput} from "flowbite-react";


function Repository ({details}) {
    return (
        <div className={
            "bg-gray-100 dark:bg-gray-700 border rounded-xl border-gray-300 dark:border-gray-600 " +
            "text-center align-center text-gray-800 dark:text-gray-100 select-none text-ellipsis " +
            "py-2 px-4"}
        >
            <a href={details.html_url} target={"_blank"}>{details.name}</a>
        </div>
    )
}

export default function RepositoryView ({repositories, setRepositories}) {
    let messageStyle = "flex-grow self-center text-center text-2xl font-black text-gray-400 dark:text-gray-600"

    const [filterText, setFilterText] = useState("");

    return (
        <div className={"flex flex-col flex-grow max-h-[50vh]"}>
            <Navbar className={"border-b border-gray-300 dark:border-gray-700 py-1"}>
                <TextInput
                    type={"text"}
                    placeholder={"Filter"}
                    onChange={event => setFilterText(event.target.value)}
                    value={filterText}
                />
            </Navbar>

            <div className={"flex flex-grow overflow-y-auto"}>
                {(() => {
                    if (Object.getOwnPropertyNames(repositories).length === 0) {
                        return (<p className={messageStyle}>Repository view</p>)
                    } else if (repositories.message === "Not Found") {
                        return (<p className={messageStyle}>No such user!</p>)
                    } else {
                        return (
                            <span className={"flex gap-5 flex-row flex-wrap content-start p-5"}>{repositories.map((repo, i) => {
                                return ((
                                    filterText === "" || repo.name.toLowerCase().includes(filterText)
                                ) ? <Repository details={repo} key={i}/> : undefined)
                            })}</span>
                        )
                    }
                })()}
            </div>
        </div>
    )
}