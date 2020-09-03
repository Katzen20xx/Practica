import React from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'

export const DetailPage = ()  => (
    <section className='page'>
        <Title label="Parapente San Felix" />
        <CardDetail />
        <Button />
    </section>
)