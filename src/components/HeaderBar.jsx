import React from 'react'
import FormFeedBack from './ui/FormFeedBack'
import classes from './ui/Header.module.scss'
const HeaderBar = () => {
	return (
		<>
			<div className={classes.formInfo}>
				<div className={classes.headInfo}>
					<h1 className={classes.label}>
						ОПТОВЫЕ ПОСТАВКИ <span>электронных компонентов</span> ИЗ КИТАЯ ДЕНЬ
						В ДЕНЬ
					</h1>
					<span>
						Комплексные поставки электронных компонентов и оборудования.
					</span>
					<span>
						Подберем аналоги популярных брендов из Европы в условиях санкций
					</span>
					<ul>
						<li>Отсрочка платежей для постоянных клиентов</li>
						<li>Отсрочка платежей для постоянных клиентов</li>
						<li>Отсрочка платежей для постоянных клиентов</li>
					</ul>
				</div>
				<FormFeedBack />
			</div>
		</>
	)
}

export default HeaderBar
