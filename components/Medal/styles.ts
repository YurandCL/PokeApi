import styled from 'styled-components'

interface Avatar {
  backgroundColor?: string
}

export const Container = styled.img<Avatar>`
  border-radius: 20px;
  background-color: ${({backgroundColor})=>`rgb(${backgroundColor})`};
`
