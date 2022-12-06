import express from 'express';
import 'express-async-errors';

const tweets = [
  {
    id: '1',
    text: 'お金が欲しい！！',
    createdAt: Date.now().toString(),
    name:'Bob',
    username:'bob',
    url: 'https://www.shutterstock.com/ko/image-photo/akita-inu-puppies-beautiful-red-domestic-1923628367'
  },
  {
    id: '2',
    text: 'お金が欲しい！！',
    createdAt: Date.now().toString(),
    name:'K',
    username:'k',
    url: 'https://www.shutterstock.com/ko/image-photo/akita-inu-puppies-beautiful-red-domestic-1923628367'
  },
];

const router = express.Router();
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter(t => t.username === username)
    : tweets;
    res.status(200).json(data);
});

export default router;