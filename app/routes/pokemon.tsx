import { Outlet } from '@remix-run/react'
import Header from 'components/Header'
import { Container } from 'styles/Container'

export default function Index({url}:{url:string}) {

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}