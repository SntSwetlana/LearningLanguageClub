import React from 'react'
import {classNames} from "shared/lib/classNames/classNames";

import cls from './Navbar.module.scss'
import {Applink, ApplinkTheme} from "shared/ui/Applink/Applink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <Applink theme={ApplinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                Главная
            </Applink>
            <Applink theme={ApplinkTheme.SECONDARY} to={'/about'}>
                О сайте
            </Applink>
        </div>
    </div>
  )
}
