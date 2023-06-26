import {DarkThemeToggle, Navbar, Tooltip} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";

export default function Header({leftBarActive, toggleLeftBar}) {
    return (
        <Navbar fluid className={"border-b border-gray-300 dark:border-gray-700"}>
            <Navbar.Brand>
                <h1 className={"text-xl text-gray-600 dark:text-gray-300 font-bold"}>RepoDex</h1>
            </Navbar.Brand>

            <div className={"flex items-center gap-5"}>
                <Tooltip content={"View source code"}>
                    <a href={"https://github.com/sujaldev/repodex"} target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub} className={"dark:text-white text-2xl"}></FontAwesomeIcon>
                    </a>
                </Tooltip>

                <Tooltip content={"Toggle dark mode"}>
                    <DarkThemeToggle onMouseUp={() => {
                        localStorage.setItem(
                            "theme",
                            document.getElementsByTagName("html")[0].classList.contains("dark") ? "light" : "dark"
                        );
                    }}/>
                </Tooltip>

                <button onClick={() => toggleLeftBar()} className={"block sm:hidden"}>
                    <FontAwesomeIcon
                        className={
                            "dark:text-white text-xl active:text-gray-500 active:dark:text-gray-400" + (
                                leftBarActive ? " mr-0.5" : ""
                            )
                        }
                        icon={leftBarActive ? faClose : faBars}
                    />
                </button>
            </div>
        </Navbar>
    )
}