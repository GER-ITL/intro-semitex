import React from 'react'
import icon from '../../assets/icon.png'
import s from './OurMan.module.scss'
const OurMan = () => {
	return (
		<div className={s.ourMan}>
			<div className={s.infoOur}>
				<h1>Наши производители</h1>
				<div className={s.items}>
					<div>
						<img src={icon} alt='' />
					</div>
					<div>
						<img src={icon} alt='' />
					</div>
					<div>
						<img src={icon} alt='' />
					</div>
					<div>
						<img src={icon} alt='' />
					</div>
					<div>
						<img src={icon} alt='' />
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
					accusamus natus architecto similique expedita laboriosam nemo eius
					dignissimos nisi exercitationem nesciunt officiis provident
					cupiditate, eligendi, inventore, veritatis recusandae quasi totam.
				</p>
			</div>
		</div>
	)
}

export default OurMan
