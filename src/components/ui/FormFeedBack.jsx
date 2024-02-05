import React from 'react'
import Button from './Button'
import clasess from './Header.module.scss'
const FormFeedBack = () => {
	return (
		<form className={clasess.formFeed}>
			<div className={clasess.labelFeed}>
				<h1>
					<strong>
						{' '}
						ЗАКАЖИТЕ <br /> ОБРАТНЫЙ ЗВОНОК
					</strong>
				</h1>
			</div>
			<div className={clasess.infoFeed}>
				<div>
					<span>Ваше имя*</span>
					<input type='text' placeholder='Петров Петр' />
				</div>
				<div>
					<span>Ваш номер*</span>
					<input type='text' placeholder='+7 (_ _ _)___ __ __' />
				</div>
				<Button>ЗАКАЗАТЬ ЗВОНОК</Button>
				<small>Мы гарантируем конфиденциальность данных</small>
			</div>
		</form>
	)
}

export default FormFeedBack
