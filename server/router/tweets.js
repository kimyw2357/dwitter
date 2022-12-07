import express from 'express';
import 'express-async-errors';

let tweets = [
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
    ? tweets.filter(tweet => tweet.username === username)
    : tweets;
    res.status(200).json(data);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find(tweet => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({messag: `tweet id(${id}) not found`});
  }
});

router.post('/', (req, res, next) => {
  const {text, name, username} = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  }
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find(tweet => tweet.id === id);
  if(tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({messag: `tweet id(${id}) not found`});
  }

})
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  tweets = tweets.filter(tweet => tweet.id !== id);
  res.sendStatus(204);
})
export default router;