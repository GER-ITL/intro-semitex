import React from 'react'
import Button from '../ui/Button'
import s from './Scheme.module.scss'
const Scheme = () => {
	return (
		<div className={s.scheme}>
			<div className={s.label}>
				<h1>Схема работы</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
					officia dolor molestias reiciendis, omnis, totam placeat iure quam
					cupiditate explicabo, quaerat maxime sapiente quibusdam eligendi.
					Molestias, repellat nulla! Debitis, beatae.
				</p>
			</div>
			<div className={s.blockItems}>
				<div className={s.item}>
					<span>01</span>
					<h3> ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>
				<div className={s.item}>
					<span>02</span>
					<h3>МЫ ПРОВЕРЯЕМ НАЛИЧИЕ ПОЗИЦИЙ</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<span>03</span>

					<h3>ФОРМИРУЕМ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<span>06</span>

					<h3>ВЫ ПОЛУЧАЕТЕ ТОВАР</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<span>05</span>

					<h3>МЫ ВЫПОЛНЯЕМ ЗАКАЗ</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>{' '}
				<div className={s.item}>
					<span>04</span>

					<h3>ПРОВОДИМ ОПЛАТУ</h3>
					<p>
						Все наши товары сертифицированы и имеют сопроводительную
						документацию.
					</p>
				</div>
			</div>
			<Button>ОСТАВИТЬ ЗАЯВКУ</Button>
		</div>
	)
}

export default Scheme
