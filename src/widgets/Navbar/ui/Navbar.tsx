import {classNames} from "shared/lib";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.links} to={'/'}>Main page link</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.links} to={'/about'}>About page link</AppLink>
        </header>
    );
};