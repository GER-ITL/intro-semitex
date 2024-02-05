import React from 'react'
import icon from '../../assets/icon.png'
import s from './Qualities.module.scss'
const Qualities = () => {
	return (
		<div>
			<div className={s.label}>
				<h1>Почему с нами выгодно</h1>
				<p>
					С 1996 года мы занимаемся оптовыми поставками электронных компонентов
					от ведущих производителей из Европы и Азии для Российских потребителей
				</p>
			</div>
			<div className={s.blockItems}>
				<div className={s.item}>
					<img src={icon} alt='icon' />
					<h3>Качественная продукция</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>
				<div className={s.item}>
					<img src={icon} alt='icon' />
					<h3>Индивидуальный подход</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<img src={icon} alt='icon' />
					<h3>Бесплатная доставка</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<img src={icon} alt='icon' />
					<h3>Подбираем аналоги</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<img src={icon} alt='icon' />
					<h3>Резервный запас компонентов</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<img src={icon} alt='icon' />
					<h3>Гибкая система оплаты</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Qualities
