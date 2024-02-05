import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
const Header = () => {
	return (
		<div className={classes.head}>
			<span className={classes.logo}>SEMITEX</span>
			<NavLink to='/one'> Каталог</NavLink>
			<NavLink to='/'> Производители</NavLink>
			<NavLink to='/'> Для кого мы работаем</NavLink>
			<NavLink to='/'> Сертификаты</NavLink>
			<NavLink to='/'> О нас</NavLink>
			<NavLink to='/'> FAQ</NavLink>
			<NavLink to='/'> Контакты</NavLink>
			<span>
				+7 (812) <span className={classes.bold}>313-58-45</span>
			</span>
		</div>
	)
}

export default Header
