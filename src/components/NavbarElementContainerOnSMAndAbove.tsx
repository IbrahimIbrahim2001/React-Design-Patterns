//utils
import { navigationElements } from "../utils/NavbarElements";

//components
import NavElementComponent from "./NavElement.component";

// UI
import PresentationalList from "./UI/PresentationalList";



export default function NavbarElementContainerOnSMAndAbove() {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                <PresentationalList items={navigationElements} resourceName="item" itemComponent={NavElementComponent}
                />
            </div>
        </div>
    )
}
