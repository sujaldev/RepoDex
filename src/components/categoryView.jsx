import {Navbar, Button} from "flowbite-react";


export default function CategoryView() {
    return (
        <div className={"flex flex-col flex-grow border-b border-gray-300 dark:border-gray-700"}>
            <Navbar className={"border-b border-gray-300 dark:border-gray-700 py-1"}>
                <Button.Group>
                    <Button color={"gray"}>1 Col</Button>
                    <Button color={"gray"}>2 Col</Button>
                    <Button color={"gray"}>3 Col</Button>
                </Button.Group>
            </Navbar>
            <div className={"flex flex-grow"}>
            </div>
        </div>
    )
}