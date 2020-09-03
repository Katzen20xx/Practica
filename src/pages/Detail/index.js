import React from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'

const buttonStyle = {
  backgroundColor: '#FC642D',
  borderColor: '#fe530c'
}

export const DetailPage = ()  => (
    <Fragment>
        <Title label="Parapente San Felix" />
        <CardDetail />
        <Button style={ buttonStyle } label='Reserva ahora!' />
    </Fragment>
)