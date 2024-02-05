import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HeaderBar from './components/HeaderBar'
import OurMan from './components/OurMan/OurMan'
import Qualities from './components/Qualities/Qualities'
import Scheme from './components/Scheme/Scheme'
import Header from './components/ui/Header'
import classes from './components/ui/Header.module.scss'
function App() {
	return (
		<>
			<div className={classes.header}>
				<Header />
				<HeaderBar />
				<div className='card'>
					<Routes>
						<Route path='/one' element={<Qualities />} />
						<Route path='/' element={''} />
					</Routes>
				</div>
			</div>
			<Qualities />
			<OurMan />
			<Scheme />
		</>
	)
}

export default App
