import React from 'react'
import { Topbar } from './../../components/Topbar'
import { Title } from './../../components/Title'
import { Ranking } from './components/Ranking'
import { FramePage } from '../FramePage'

export const HomePage = () => (
    <FramePage>
        <Topbar />
        <Title label="Top 5" />
        <Ranking />
        <Title label="Lista" />
    </FramePage>
)