import React from 'react'
import { Table } from 'semantic-ui-react'


function ProductTable({ orders}) {
  let orderList
  if (!orders || orders.length === 0) {
    orderList = (
      <Table.Row key='no-order'>
        <Table.Cell collapsing textAlign='center' colSpan='3'>Ürün Yok</Table.Cell>
      </Table.Row>
    )
  } else {
    orderList = orders.map(order => {
      return (
        <Table.Row key={order.id}>
          <Table.Cell>{order.id}</Table.Cell>
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
      
      <Table compact striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>ID</Table.HeaderCell>
            <Table.HeaderCell width={1}>Oluşturuldu</Table.HeaderCell>
            <Table.HeaderCell width={1}>Ürün Tipi</Table.HeaderCell>
            <Table.HeaderCell width={1}>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell width={1}>Adet</Table.HeaderCell>
            <Table.HeaderCell width={1}>Fiyat</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orderList}
        </Table.Body>
      </Table>
    </>
  )
}

export default ProductTable