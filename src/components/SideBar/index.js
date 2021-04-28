import React from 'react';
import './style.scss';
import { Menu, Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { filter } from '../../actions/books'


function SideBar(props) {
   const { setSort } = props;
   const { sortBy } = props;
   let handleItemClick = (e, { name }) => setSort(name)

   return (
      <Menu>
         <Menu.Item
            name='all'
            active={sortBy === 'all'}
            onClick={handleItemClick}
         >
            All
        </Menu.Item>

         <Menu.Item
            name='price_high'
            active={sortBy === 'price_high'}
            onClick={handleItemClick}
         >
            Price (High)
        </Menu.Item>

         <Menu.Item
            name='price_low'
            active={sortBy === 'price_low'}
            onClick={handleItemClick}
         >
            Price (Low)
        </Menu.Item>

         <Menu.Item
            name='author'
            active={sortBy === 'author'}
            onClick={handleItemClick}
         >
            Author
        </Menu.Item>
         <Menu.Item>
            <Input icon='search' placeholder='Search...' onChange={(e) => props.setSearch(e.target.value)} />
         </Menu.Item>
      </Menu>
   )
}


const mapStateToProps = (state) => {
   return {
      sortBy: state.books.sortBy
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setSort: (sort) => dispatch(filter(sort))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)