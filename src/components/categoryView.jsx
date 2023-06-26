import {Button} from "flowbite-react";


export default function CategoryView() {
    return (
        <div className={"flex flex-col flex-grow border-b border-gray-300 dark:border-gray-700"}>
            <div className={"border-b border-gray-300 dark:border-gray-700 p-4 px-2"}>
                <Button.Group>
                    <Button color={"gray"}>1 Col</Button>
                    <Button color={"gray"}>2 Col</Button>
                    <Button color={"gray"}>3 Col</Button>
                </Button.Group>
            </div>
            <div className={"flex flex-grow"}>
            </div>
        </div>
    )
}