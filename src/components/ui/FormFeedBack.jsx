import React from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import clasess from './Header.module.scss'
const FormFeedBack = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onChange',
	})
	const onSubmit = data => {
		alert(` ${data.name} ${data.email}`)
		console.log('data', data)
		reset()
	}

	return (
		<form className={clasess.formFeed} onSubmit={handleSubmit(onSubmit)}>
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
					<span style={{ color: 'black' }}>Ваше имя*</span>
					<input
						type='text'
						placeholder='Name'
						{...register('name', {
							required: 'Name is required field',
							maxLength: 10,
							minLength: 3,
						})}
					/>
					{errors?.name && (
						<div style={{ color: 'red' }}>{errors.name.message}</div>
					)}
				</div>
				<div>
					<span style={{ color: 'black' }}>Ваш Email*</span>
					<input
						placeholder='Email'
						{...register('email', {
							required: 'Email is required field',
							pattern: {
								value:
									/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
								message: 'Please enter valid email!',
							},
						})}
					/>
					{errors?.email && (
						<div style={{ color: 'red' }}>{errors.email.message}</div>
					)}
				</div>
				<Button>ЗАКАЗАТЬ ЗВОНОК</Button>
				<small>Мы гарантируем конфиденциальность данных</small>
			</div>
		</form>
	)
}

export default FormFeedBack
