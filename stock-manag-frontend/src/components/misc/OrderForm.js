import React from 'react'
import { Form, Button, Icon, Divider, Message } from 'semantic-ui-react'

function OrderForm({ orderDescription, orderProductName,  orderQuantity,  orderPrice, handleInputChange, handleCreateOrder }) {
  const createBtnDisabled = orderDescription.trim() === ''
  
 
  return (
    <div>
          <h1 className='y'>
            ÜRÜN DETAYLARI
          </h1>
          <Divider></Divider>
        <Form size='large' onSubmit={handleCreateOrder}>
        
              <Form.Field labelPosition='right'>
              <label>Ürün Tipi: </label>
              
                <Form.Input
                  fluid
                  name='orderDescription'
                  placeholder='Ürün Tipi'
                  value={orderDescription}
                  labelPosition='left'
                  onChange={handleInputChange}
                  >
                  </Form.Input>           
              </Form.Field>
              
              <Form.Field labelPosition='right'>
              <label>Ürün Adı: </label>
              
                <Form.Input
                  fluid
                  name='orderProductName'
                  placeholder='Ürün Adı'
                  value={orderProductName}
                  labelPosition='left'
                  onChange={handleInputChange}
                  >
                  </Form.Input>           
              </Form.Field>
            
              <Form.Field labelPosition='right'>
              <label>Adet: </label>
              
                <Form.Input
                  fluid
                  name='orderQuantity'
                  placeholder='Adet'
                  value={orderQuantity}
                  labelPosition='left'
                  onChange={handleInputChange}
                  >
                  </Form.Input>           
              </Form.Field>

              <Form.Field labelPosition='right'>
              <label>Fiyat: </label>
              
                <Form.Input
                  fluid
                  name='orderPrice'
                  placeholder='Fiyat'
                  value={orderPrice}
                  labelPosition='left'
                  onChange={handleInputChange}
                  >
                  </Form.Input>           
              </Form.Field>

              <Button className='buton' icon labelPosition='right' disabled={createBtnDisabled}>
                Ürün Ekle<Icon name='add' />
              </Button>

        </Form> 
          
    </div>
  )
}

export default OrderForm