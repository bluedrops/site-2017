import React, {Component} from 'react'
import ReactDom from 'react-dom'

import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router'

//stores
import { Provider } from 'mobx-react'
import RegistrationStore from './modules/registration/stores'
import LoginStore from './modules/registration/stores/loginStore'
import ResetStore from './modules/registration/stores/resetStore'
import RSVPStore from './modules/registration/stores/rsvpStore'
import DashboardStore from './modules/dashboard/dashboard.store'

import App from './modules/app'
import Landing from './modules/landing'
import Registration from './modules/registration'
import Projects from './modules/projects'
import Travel from './modules/travel'
import Prizes from './modules/prizes'

//registration sub-pages
import Announcement from './modules/registration/announcement'
import UserInfo from './modules/registration/userinfo'
import Ecosystems from './modules/registration/ecosystems'
import Team from './modules/registration/team'
import Success from './modules/registration/success'

import Login from './modules/registration/login'
import Reset from './modules/registration/reset'
import RSVP from './modules/registration/rsvp'
import Dashboard from './modules/dashboard'
import Judging from './modules/judging'
import Maps from './modules/maps'
import DayOf from './modules/dayof'

//PDFs
const OpenSource = () => {
	window.location = 'src/assets/pdf/opensource.pdf'
	return null
}
const Exhibitor = () => {
	window.location = 'src/assets/pdf/exhibitor.pdf'
	return null
}
const Sponsor = () => {
	window.location = 'src/assets/pdf/sponsorship_2017.pdf'
	return null
}
const Hotels = () => {
	window.location = 'src/assets/pdf/hotels.pdf'
	return null
}
const Code = () => {
	window.location = 'src/assets/pdf/code_of_conduct.pdf'
	return null
}

const Schedule = () => {
	window.location = 'src/assets/pdf/HackIllinois_schedule.pdf'
	return null
}

const root = document.getElementById("app")

ReactDom.render(
	<Provider dashboardStore={DashboardStore} rsvpStore={RSVPStore} resetStore={ResetStore} loginStore={LoginStore} store={RegistrationStore}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Landing}/>
				<Route path='opensource' component={OpenSource}/>
				<Route path='sponsor' component={Sponsor}/>
				<Route path='exhibitor' component={Exhibitor}/>
				<Route path='hotels' component={Hotels}/>
				<Route path='code' component={Code}/>
				<Route path='schedule' component={Schedule}/>
			</Route>
			<Route path='registration' component={Registration}>
				<IndexRoute component={Announcement}/>
				<Route path='1' component={Announcement}/>
				<Route path='2' component={UserInfo}/>
				<Route path='3' component={Ecosystems}/>
				<Route path='4' component={Team}/>
				<Route path='5' component={Success}/>
			</Route>
			<Route path='login' component={Login}/>
			<Route path='reset' component={Reset}/>
			<Route path='rsvp' component={RSVP}/>
			<Route path='prizes' component={Prizes}/>
			<Route path='travel' component={Travel}/>
			<Route path='projects' component={Projects}/>
			<Route path='dashboard' component={Dashboard}/>
			<Route path='judging' component={Judging}/>
			<Route path='maps' component={Maps}/>
			<Route path='dayof' component={DayOf}/>
		</Router>
	</Provider>
		, root)

/*
<Route path='registration' component={Registration}>
	<Route path='1' component={Announcement}/>
	<Route path='2' component={UserInfo}/>
	<Route path='3' component={Projects}/>
	<Route path='4' component={Team}/>
	<Route path='5' component={Success}/>
</Route>
*/
