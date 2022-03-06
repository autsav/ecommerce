// import logo from './logo.svg';
// import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Switch, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'









function App() {
  const userLoggedin = useSelector(state => state.userLogin)
    const { userInfo } = userLoggedin
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />}  />
            <Route path='/register' element={<RegisterScreen />}  />
            <Route path='/profile' element={<ProfileScreen />}  />
            <Route path='/shipping' element={userInfo ? <ShippingScreen /> : <Navigate to="/login" /> }  />
            <Route path='/payment'  element={userInfo ? <PaymentScreen  /> : <Navigate to="/login" /> }  />
            <Route path='/placeorder'  element={userInfo ? <PlaceOrderScreen  /> : <Navigate to="/login" /> }  />
            <Route path='/order/:id'  element={userInfo ? <OrderScreen  /> : <Navigate to="/login" /> }  />

            <Route path='/product/:id' element={<ProductScreen />}/>
            <Route path='/cart/' element={<CartScreen />}/>
            <Route path='/cart/:id' element={<CartScreen />}/>  
            <Route path='/admin/userlist' element={ userInfo && userInfo.isAdmin ? (<UserListScreen />):(<Navigate to="/login" />)

            
      }/>  
          </Routes>
          
        </Container>
      </main>
      <Footer />
    </Router>
   
  );
}

export default App;
