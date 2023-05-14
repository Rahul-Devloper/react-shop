import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { Product } from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Products = () => {
  return (
    <Container>
      {popularProducts?.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </Container>
  )
}
