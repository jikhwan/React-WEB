const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport')
const { User, Post } = require('../models')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        if(req.user) {
            // console.log('req.user ',req.user)
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err)
            return next(err)
        }
        if (info) {
            return res.status(401).send(info.reason)
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                return next(loginErr)
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            return res.status(200).json(fullUserWithoutPassword);
        })
    })(req, res, next)
})

router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /USER/
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용 중인 아이디입니다.')
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        })
        res.status(200).send('ok');    
    } catch (error) {
        console.error(error)
        next(error)
    }    
})
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    req.send('ok');
})


module.exports = router