import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import classes from './Footer.module.scss'
const Footer = () => {
	return (
		<div className={classes.footer}>
			<span className={classes.logo}>SEMITEX</span>
			<NavLink to='/one'> Каталог</NavLink>
			<NavLink to='/'> Производители</NavLink>
			<NavLink to='/'> Для кого мы работаем</NavLink>
			<NavLink to='/'> Сертификаты</NavLink>
			<NavLink to='/'> О нас</NavLink>
			<NavLink to='/'> FAQ</NavLink>
			<NavLink to='/'> Контакты</NavLink>
			<span>
				<Button>Оставить заявку</Button>
			</span>
		</div>
	)
}

export default Footer
