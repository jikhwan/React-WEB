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

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        const NickUser = await User.findOne({
            where: {
                id: req.user.id,
            }
        })
        if (!NickUser) {
            return res.status(403).send('타 사용자의 닉네임을 변경할 수 없습니다.')
        }
        NickUser.update({
            nickname: req.body.nickname
        })
        return res.status(200).json({ nickname: req.body.nickname })
    } catch (error) {
        console.error(error);
        next(error)
        
    }
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                id: req.params.userId,
            }
        })
        if (!exUser) {
            return res.status(403).send('존재하지 않는 사람을 팔로우 할 수 없습니다.')
        }
        await exUser.addFollowers(req.user.id)
        return res.status(200).json({ UserId: parseInt(req.params.UserId, 10) })
    } catch (error) {
        console.error(error);
        next(error)        
    }
})

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                id: req.params.userId,
            }
        })
        if (!exUser) {
            return res.status(403).send('존재하지 않는 사람을 언팔로우 할 수 없습니다.')
        }
        await exUser.removeFollowers(req.user.id)
        return res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
    } catch (error) {
        console.error(error);
        next(error)        
    }
})

router.get('/:id', async (req, res, next) => { // GET /user/3
    try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
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
      if (fullUserWithoutPassword) {
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length;
        data.Followings = data.Followings.length;
        data.Followers = data.Followers.length;
        res.status(200).json(data);
      } else {
        res.status(404).json('존재하지 않는 사용자입니다.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  

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

router.get('/following', isLoggedIn, async (req, res, next) => { // POST /USER/
    try {
        const user = await User.findOne({
            where: {
                id: req.user.id,
            }
        });
    if (!user) {
        res.status(403).send('없는 사람의 팔로잉을 찾으려고 합니다.')
    }
    const following = await user.getFollowings(); 
    res.status(200).json(following);
    } catch (error) {
        console.error(error)
        next(error)
    }    
})

router.get('/follower', isLoggedIn, async (req, res, next) => { // POST /USER/
    try {
        const user = await User.findOne({
            where: {
                id: req.user.id,
            }
        });
    if (!user) {
        res.status(403).send('없는 사람의 팔로워를 찾으려고 합니다.')
    }
    const follower = await user.getFollowers(); 
    res.status(200).json(follower);
    } catch (error) {
        console.error(error)
        next(error)
    }    
})

router.delete('/:userId/follower', isLoggedIn, async (req, res, next) => { // POST /USER/
    try {
        const user = await User.findOne({
            where: {
                id: req.params.userId,
            }
        });
    if (!user) {
        res.status(403).send('없는 사람을 차단하려고 합니다.')
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId : parseInt(req.params.userId, 10) })
    } catch (error) {
        console.error(error)
        next(error)
    }    
})

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
  });


module.exports = router