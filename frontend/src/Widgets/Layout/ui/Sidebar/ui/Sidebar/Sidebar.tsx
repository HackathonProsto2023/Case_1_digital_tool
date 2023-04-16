import { memo } from "react";
import { SidebarNavigation } from "../SidebarNavigation/SidebarNavigation";

import s from "./Sidebar.module.scss";

const Sidebar = memo(() => {
    return (
        <aside className={s.sidebar}>
            <SidebarNavigation />
        </aside>
    )
})

export default Sidebar