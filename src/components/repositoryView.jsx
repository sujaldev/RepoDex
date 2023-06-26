import {useState} from "react";
import {Button, Table, TextInput} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit, faExternalLink} from "@fortawesome/free-solid-svg-icons";


function RepoCell({repo}) {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <Table.Row>
            <Table.Cell className={"whitespace-nowrap font-medium text-gray-900 dark:text-white"}>
                <span className={"mr-4"}>{repo.name}</span>
                <a href={repo.html_url} target={"_blank"}><FontAwesomeIcon icon={faExternalLink}/></a>
            </Table.Cell>
            <Table.Cell className={"flex flex-grow flex-row gap-4"}>
                <TextInput disabled={!isEditing} value={repo.description}/>
                <Button onClick={() => {setIsEditing(!isEditing)}} color={"gray"} className={"py-1 px-0"}>
                    {isEditing ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faEdit}/>}
                </Button>
            </Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
    )
}

function RepoTable ({repositories}) {
    const [filterText, setFilterText] = useState("");
    return (
        <Table striped>
            <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell className={"flex justify-end"}>
                    <TextInput
                        type={"text"}
                        placeholder={"Filter"}
                        onChange={event => setFilterText(event.target.value)}
                        value={filterText}
                        className={"max-w-[250px]"}
                    />
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className={""}>
                {repositories.map((repo, i) => {
                    return ((
                        filterText === "" || repo.name.toLowerCase().includes(filterText.toLowerCase()
                        ) ? <RepoCell repo={repo} key={i}/>: undefined))
                })}
            </Table.Body>
        </Table>
    )
}

export default function RepositoryView ({repositories, setRepositories}) {
    let messageStyle = "flex flex-grow justify-center items-center text-2xl font-black text-gray-400 dark:text-gray-600"


    return (
        <div className={"flex flex-grow flex-col overflow-y-auto p-2 max-h-[46vh]"}>
            {(() => {
                if (Object.getOwnPropertyNames(repositories).length === 0) {
                    return (<p className={messageStyle}>Repository view</p>)
                } else if (repositories.message === "Not Found") {
                    return (<p className={messageStyle}>No such user!</p>)
                } else {
                    return (<RepoTable repositories={repositories}/>)
                }
            })()}
        </div>
    )
}