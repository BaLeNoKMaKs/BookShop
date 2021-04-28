import React from 'react';
import { Menu, Button, Popup, List, Image } from 'semantic-ui-react';

import './style.scss';

import { connect } from 'react-redux'

import uniqBy from 'lodash/uniqBy'

import { removeFromCart } from '../../actions/cart'


function TopMenu(props) {
   return (
      <div>
         <Menu>
            <Menu.Item
               name='Интернет магазин книг'
            />
            <Menu.Item position='right'
               name={`Итого: ${props.totalPrice}`}
            />

            <Popup
               content={
                  <List divided verticalAlign='middle'>
                     {
                        props.cartArr.length !== 0
                           ? uniqBy(props.cartArr, 'id').map(element => {
                              return <List.Item key={element.id}>
                                 <List.Content floated='right'>
                                    <Button
                                       onClick={() => props.removeItem(element.id)}
                                       color="red"
                                    >Удалить</Button>
                                 </List.Content>
                                 <Image avatar src={element.img} />
                                 <List.Content>{element.name} {`(${props.amountBooks(element.id)})`}</List.Content>
                              </List.Item>
                           })
                           : "Корзина пуста"
                     }
                  </List>
               }
               on='click'
               hideOnScroll
               trigger={
                  <Menu.Item name='help'>
                     Корзина &nbsp; <b >{props.cartArr.length}</b>
                  </Menu.Item >
               }
            />
         </Menu>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      cartArr: state.cart.cartArr,
      totalPrice: state.cart.cartArr.reduce((prev, next) => prev + next.price, 0),
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeItem: (id) => dispatch(removeFromCart(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu)