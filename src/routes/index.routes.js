import { Router } from 'express'
export const router = new Router()

import User from '../models/user.js'

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/join', (req, res) => {
    res.render('join')
})

router.post('/join', async (req, res) => {
    const { discord, reason } = req.body

    const user = new User()
    user.discord = discord
    user.reason = reason

    await user.save()
    res.redirect('/')
})

router.get('/about', (req, res) => {
    res.render('about')
})