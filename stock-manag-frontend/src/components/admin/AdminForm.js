import React from 'react'
import { Form, Button, Icon, Divider, Message } from 'semantic-ui-react'

function AdminForm({ orderId, orderusername, orderDescription, orderProductName,  orderQuantity,  orderPrice, handleInputChange, handleUpdateOrder }) {
  const createBtnDisabled = orderDescription.trim() === ''
  
  return (
    <div>
          <h1 className='y'>
            ÜRÜN DETAYLARI
          </h1>
          <Divider></Divider>
        <Form size='large' onSubmit={handleUpdateOrder}>
        
              <Form.Field labelPosition='right'>
                <label>Id: </label>
                  <Form.Input
                    fluid
                    name='orderId'
                    placeholder='Id *'
                    value={orderId}
                    labelPosition='left'
                    onChange={handleInputChange}
                  />
              </Form.Field>

              <Form.Field labelPosition='right'>
                <label>Username: </label>
                  <Form.Input
                    fluid
                    name='orderusername'
                    placeholder='Username *'
                    value={orderusername}
                    labelPosition='left'
                    onChange={handleInputChange}
                  />
              </Form.Field>

              <Form.Field labelPosition='right'>
                {/* <label>Description: </label> */}
                <label>Tanım: </label>
                  <Form.Input
                    fluid
                    name='orderDescription'
                    placeholder='Description *'
                    value={orderDescription}
                    labelPosition='left'
                    onChange={handleInputChange}
                  />
              </Form.Field>

              <Button className='buton' icon labelPosition='right' disabled={createBtnDisabled}>
                Başvuru Yap<Icon name='add' />
              </Button>

        </Form> 
          
    </div>
  )
}

export default AdminForm