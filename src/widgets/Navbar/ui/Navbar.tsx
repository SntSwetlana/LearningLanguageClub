import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Applink, ApplinkTheme } from 'shared/ui/Applink/Applink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Applink theme={ApplinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </Applink>
                <Applink theme={ApplinkTheme.SECONDARY} to="/about">
                    {t('О сайте')}
                </Applink>
            </div>
        </div>
    );
};
