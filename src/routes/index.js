// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Customers = lazy(() => import('../pages/protected/Customers'))
const Orders = lazy(() => import('../pages/protected/Orders'))
const OriginalMedicine = lazy(() => import('../pages/protected/OriginalMedicine'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const Home = lazy(() => import('../pages/Home'))
const Product = lazy(() => import('../pages/Product'))
const About = lazy(() => import('../pages/About'))
const Cart = lazy(() => import('../pages/Cart'))
const PaymentSuccess = lazy(() => import('../pages/PaymentSuccess'))


const routes = [
  {
    path: '/home', 
    component: Home,
  },
  {
    path: '/product', 
    component: Product,
  },
  {
    path: '/about', 
    component: About,
  },
  {
    path: '/cart', 
    component: Cart,
  },
  {
    path: '/paymentSuccess', 
    component: PaymentSuccess,
  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/customers',
    component: Customers,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/originalMedicine',
    component: OriginalMedicine,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
