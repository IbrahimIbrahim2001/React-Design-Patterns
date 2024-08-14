import {
    DisclosurePanel
} from '@headlessui/react';

import NavElementComponent from "./NavElement.component";
import PresentationalList from "./UI/PresentationalList";

import { navigationElements } from '../utils/NavbarElements';

export default function NavbarDisclosurePanelOnXSOnly() {
    return (
        <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <PresentationalList items={navigationElements} resourceName="item" itemComponent={NavElementComponent}
                />
            </div>
        </DisclosurePanel>
    )
}
