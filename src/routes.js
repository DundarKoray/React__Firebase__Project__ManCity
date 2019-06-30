import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'

import Home from './Components/home'
import SignIn from './Components/signin'

import Dashboard from './Components/admin/Dashboard'
import AdminMatches from './Components/admin/matches'
import AddEditMatch from './Components/admin/matches/addEditMatch'
import AdminPlayers from './Components/admin/players'

const Routes = (props) => {
  return (
    <div>
      <Layout>
        <Switch>
          <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
          <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
          <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
          <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
          <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
          <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
          
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes
