import {useState} from "react";
import {Button, Sidebar, Spinner, TextInput} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export default function LeftBar({leftBarActive, setRepositories}) {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            .then(response => response.json())
            .then((json) => {setRepositories(json); setIsLoading(false)})
            .catch(() => {setRepositories({}); setIsLoading(false)});

        setUsername("");
    }

    return (
        <Sidebar
            id={"leftbar"}
            className={
                "min-w-[280px] max-w-[280px] z-50 border-r border-gray-300 dark:border-gray-700 -translate-x-full sm:translate-x-0 fixed sm:relative transition-transform" + (
                    leftBarActive ? " transform-none" : ""
                )
        }>
            <form onSubmit={handleSubmit} className={"flex flex-row gap-2"}>
                <TextInput
                    type={"text"}
                    placeholder={"Your GitHub username"}
                    className={"pt-0.5"}
                    onChange={event => setUsername(event.target.value)}
                    value={username}
                    required={true}
                />
                <Button type={"submit"} color={"gray"}>
                    {isLoading ? <Spinner/> : <FontAwesomeIcon icon={faSearch} className={"py-1"}/>}
                </Button>
            </form>
        </Sidebar>
    )
}