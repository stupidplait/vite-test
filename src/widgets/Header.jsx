import { NavLink } from 'react-router-dom';
import { IconButton } from './IconButton';
import logo from '../assets/img/common/logo.svg';
import search from '../assets/img/common/search.svg';
import like from '../assets/img/common/like.svg';
import basket from '../assets/img/common/basket.svg';

export function Header() {
    return (
        <header className='py-0.5'>
            <div className="container">
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-[34px]'>
                        <NavLink to="/">
                            <img src={logo} alt="Logo" />
                        </NavLink>
                        <nav className='mt-1 flex items-center gap-[26px]'>
                            <NavLink className='link' to="/">Главная</NavLink>
                            <NavLink className='link' to="/catalog">Каталог</NavLink>
                            <NavLink className='link' to="/info">Информация</NavLink>
                        </nav>
                    </div>
                    <div className='flex items-center gap-[26px]'>
                        <IconButton image={search} />
                        <IconButton image={basket} />
                        <IconButton image={like} />
                    </div>
                </div>
            </div>
        </header>
    );
}