import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import data from '../../response'
import s from './Answers.module.scss'

const Answers = ({ children }) => {
	return (
		<div className={s.answers}>
			<div className={s.infoAnswers}>
				<h1>Ответы на самые популярные вопросы в сфере</h1>
				<NavLink to='/1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime?
				</NavLink>
				<NavLink to='/2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime?
				</NavLink>
				<NavLink to='/3'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime?
				</NavLink>
				<NavLink to='/4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime?
				</NavLink>
				<NavLink to='/5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime?
				</NavLink>
			</div>
			<br />
			<Routes>
				{data.map(answer => {
					return (
						<Route key={answer.id} path={answer.id} element={answer.answer} />
					)
				})}
			</Routes>
		</div>
	)
}

export default Answers
