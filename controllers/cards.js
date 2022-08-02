const Cards = require('../models/card');
const {
  BAD_REQUEST_ERR,
  BAD_REQUEST_ERR_MESSAGE,
  SERVER_ERR,
  SERVER_ERR_MESSAGE,
  NOT_FOUND_ERR,
  NOT_FOUND_CARD_ERR_MESSAGE,
} = require('../utils/errors');

const getCards = (req, res) => {
  Cards.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(SERVER_ERR).send({ message: SERVER_ERR_MESSAGE }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Cards.create({ name, link, owner: req.user._id })
    .then((card) => res.status(201).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(BAD_REQUEST_ERR).send({ message: BAD_REQUEST_ERR_MESSAGE });
        return;
      }
      res.status(SERVER_ERR).send({ message: SERVER_ERR_MESSAGE });
    });
};

const deleteCard = (req, res) => {
  Cards.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND_ERR).send({ message: NOT_FOUND_CARD_ERR_MESSAGE });
        return;
      }
      res.send({ message: `Карточка '${card.name}' удалена` });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST_ERR).send({ message: BAD_REQUEST_ERR_MESSAGE });
        return;
      }
      res.status(SERVER_ERR).send({ message: SERVER_ERR_MESSAGE });
    });
};

const addLike = (req, res) => {
  Cards.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND_ERR).send({ message: NOT_FOUND_CARD_ERR_MESSAGE });
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST_ERR).send({ message: BAD_REQUEST_ERR_MESSAGE });
        return;
      }
      res.status(SERVER_ERR).send({ message: SERVER_ERR_MESSAGE });
    });
};

const deleteLike = (req, res) => {
  Cards.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND_ERR).send({ message: NOT_FOUND_CARD_ERR_MESSAGE });
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST_ERR).send({ message: BAD_REQUEST_ERR_MESSAGE });
        return;
      }
      res.status(SERVER_ERR).send({ message: SERVER_ERR_MESSAGE });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  addLike,
  deleteLike,
};
