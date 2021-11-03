import React from 'react'
import '@csstools/normalize.css';
import LastPosts from './pages/lastPosts'
import './styles/App.css'
import Layout from './common/layout'
import Header from './components/header'

const App = () => {
		
	return (
		<div className='App'>
			<Layout>
				<Header/>
				<LastPosts/>
			</Layout>
		</div>
	)
}

export default App
