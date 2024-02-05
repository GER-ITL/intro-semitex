import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
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
				<Route
					path='/1'
					element={
						'				1  autem, officia voluptatibus dolorem? Omnis, illum deserunt adipisci perferendis laboriosam assumenda.'
					}
				/>
				<Route
					path='/2'
					element={
						'				2 Lutem, officia voluptatibus dolorem? Omnis, illum deserunt adipisci perferendis laboriosam assumenda.'
					}
				/>
				<Route
					path='/3'
					element={
						'				3 Corporis reiciendis voluptatum sapiente temporibus iste, blanditiis recusandae nam ducimus animi autem, officia voluptatibus dolorem? Omnis, illum deserunt adipisci perferendis laboriosam assumenda.'
					}
				/>
				<Route
					path='/4'
					element={
						'				4 Cimus animi autem, officia voluptatibus dolorem? Omnis, illum deserunt adipiscimus animi autem, officia voluptatibus dolorem? Omnis, illum deserunt adipisci perferendis laboriosam assumenda.'
					}
				/>
				<Route
					path='/5'
					element={
						'				5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis voluptatum sapiente temporibus iste, blanditiis recusandae nam ducimus animi autem, officia voluptatibus dolorem? Omnis, illum deserunt adipisci perferendis laboriosam assumenda.'
					}
				/>
			</Routes>
		</div>
	)
}

export default Answers
