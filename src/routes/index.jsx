/* eslint-disable import/no-anonymous-default-export */
import {Navigate,useRoutes} from 'react-router-dom'
import PublicLayout from '../layout/index'
import Home from '../view/home'
import Login from '../view/login/login'
import AreaChartOutlined from '../view/bigdata'
import Tabblepage from '../view/superform/Tabblepage'
import Tabble from '../view/superform/Tabble'

const routes = [
  {
    path:'/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <PublicLayout />,
    children:[
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/dataScreen',
        element: <AreaChartOutlined />
      },
      {
        path: '/tabble/Page',
        element: <Tabblepage />
      },
      {
        path: '/tabble/basic',
        element: <Tabble />
      }
    ]
  },
  {
		path: "*",
		element: <Navigate to="/404" />
	}
]

const Router = () =>{
  const router = useRoutes(routes);
  return router
}

export default Router