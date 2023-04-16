import { memo } from "react";
import { Link } from "react-router-dom";
import { useTypedTranslation } from "Shared";
import { SidebarNavigationSchema } from "../../config/SidebarNavigationConfig";

import s from "./SidebarNavigation.module.scss"

export const SidebarNavigation = memo((props) => {
    const { t } = useTypedTranslation()

    return (
        <ul className={s.list}>
            {Object.values(SidebarNavigationSchema).map(({ text, icon, route }) => {
                return (
                    <div className={s.item}>
                        <span className={s.icon}>{icon}</span>
                        <Link to={route} className={s.link}>{t(text)}</Link>
                    </div>
                )
            })}
        </ul>
    )
})