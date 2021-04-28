import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'
import "./style.scss";
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';


function Items(props) {
   console.log('propos Items', props)
   const extra = (element) => {
      return <React.Fragment >
         <a>
            <Icon name='rub' />
            {element.price}
         </a>
         <Button
            onClick={() => {
               props.setCart(element);
            }}
            content={`Добавить ${props.amountBooks(element.id)}`}
            position='right'
         />
      </React.Fragment>
   }

   let arrShow = props.books.map((element) => {
      return <Card
         key={element.id}
         image={element.img}
         header={element.name}
         meta={element.author}
         description={element.description}
         extra={extra(element)}
      />
   })

   return (
      <div>
         <Grid columns='3'
            style={{
               display: "flex",
               justifyContent: 'space-between',
               alignItems: "center"
            }}
         >
            {arrShow}
         </Grid>
      </div>
   )
}


const mapStateToProps = (state) => {
   return {
      // amountBooks: (id) => state.cart.cartArr.reduce((prev, currentEll) => prev + (currentEll.id === id ? 1 : 0), 0)
   }
}

export default connect(mapStateToProps, null)(Items);
