import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserTable from './UserTable'
import OrderTable from './OrderTable'

function AdminTab(props) {
  const { handleInputChange } = props
  const { isUsersLoading, users, userUsernameSearch, handleDeleteUser, handleSearchUser } = props
  const { isOrdersLoading, orders, orderId, orderusername, orderDescription, orderProductName, orderQuantity, orderPrice, orderTextSearch, handleUpdateOrder, handleDeleteOrder, handleSearchOrder } = props

  const panes = [
    {
      menuItem: { key: 'users', icon: 'users', content: 'KULLANICILAR' },
      render: () => (
        <Tab.Pane loading={isUsersLoading}>
          <UserTable
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleInputChange={handleInputChange}
            handleDeleteUser={handleDeleteUser}
            handleSearchUser={handleSearchUser}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'orders', icon: 'laptop', content: 'BAŞVURULAR' },

      render: () => (
        <Tab.Pane loading={isOrdersLoading}>
          <OrderTable
            orders={orders}
            orderusername={orderusername}
            orderDescription={orderDescription}
            orderProductName={orderProductName}
            orderQuantity={orderQuantity}
            orderPrice={orderPrice}
            orderTextSearch={orderTextSearch}
            handleInputChange={handleInputChange}
            handleUpdateOrder={handleUpdateOrder}
            handleDeleteOrder={handleDeleteOrder}
            handleSearchOrder={handleSearchOrder}
          />
        </Tab.Pane>
      )
    }
  ]

  return (
    <Tab menu={{ attached: 'top' }} panes={panes} />
  )
}

export default AdminTab