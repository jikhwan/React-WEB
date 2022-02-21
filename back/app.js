const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();
const passportConfig = require('./passport');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan')

dotenv.config();

const session = require('express-session')
const cookieParser = require('cookie-parser')

db.sequelize.sync()
  .then(() => {
      console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();
app.use(cors({
    origin: 'http://localhost:3060',
    credentials: true,

}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('hello express')
})

app.use('/post', postRouter)
app.use('/posts', postsRouter)
app.use('/user', userRouter)

app.use((err, req, res, next) => {

})

app.listen(3065, () => {
    console.log('node server')
})