import React from 'react'
import { Grid, Form, Button, Input, Table } from 'semantic-ui-react'
import OrderForm from '../misc/OrderForm'
import AdminForm from './AdminForm'

function OrderTable({ orders, orderId, orderusername, orderDescription, orderProductName, orderQuantity, orderTextSearch, handleInputChange, handleUpdateOrder, handleDeleteOrder, handleSearchOrder }) {
  let orderList
  if (orders.length === 0) {
    orderList = (
      <Table.Row key='no-order'>
        <Table.Cell collapsing textAlign='center' colSpan='5'>Başvuru Oluşturulmamıştır</Table.Cell>
      </Table.Row>
    )
  } else {
    orderList = orders.map(order => {
      return (
        <Table.Row key={order.id}>

          <Table.Cell collapsing>
            <Button
              circular
              color='red'
              size='small'
              icon='trash'
              onClick={() => handleDeleteOrder(order.id)}
            />
          </Table.Cell>
          
          <Table.Cell>{order.id}</Table.Cell>
          <Table.Cell>{order.user.username}</Table.Cell>
          <Table.Cell>{order.createdAt}</Table.Cell>
          <Table.Cell>{order.description}</Table.Cell>
          <Table.Cell>{order.productName}</Table.Cell>
          <Table.Cell>{order.quantity}</Table.Cell>
          <Table.Cell>{order.price}</Table.Cell>
          
        </Table.Row>
      )
    })
  }

  return (
    <>
      <Grid stackable divided>
        <Grid.Row columns='2'>
          <Grid.Column width='5'>
            <Form onSubmit={handleSearchOrder}>
              <Input
                action={{ icon: 'search' }}
                name='orderTextSearch'
                placeholder='Id veya Ürün tipi ile ara'
                value={orderTextSearch}
                onChange={handleInputChange}
              />
            </Form>
          </Grid.Column>

        </Grid.Row>
      </Grid>
      <Table compact striped selectable>
        <Table.Header>
          <Table.Row>
            {/* <Table.HeaderCell width={1}/> */}
            <Table.HeaderCell width={1}/>
            <Table.HeaderCell width={5}>ID</Table.HeaderCell>
            <Table.HeaderCell width={2}>Kullanıcı Adı</Table.HeaderCell>
            <Table.HeaderCell width={4}>Oluşturuldu</Table.HeaderCell>
            <Table.HeaderCell width={6}>Ürün Tipi</Table.HeaderCell> 
            <Table.HeaderCell width={7}>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell width={8}>Adet</Table.HeaderCell>
            <Table.HeaderCell width={9}>Fiyat</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orderList}
        </Table.Body>
      </Table>
    </>
  )
}

export default OrderTable