import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import customerSlice from '../features/customers/customerSlice'
import ordersSlice from '../features/orders/ordersSlice'

const combinedReducer = {
  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  customer : customerSlice,
  order : ordersSlice
}

export default configureStore({
    reducer: combinedReducer
})