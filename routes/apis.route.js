const express = require('express');
const apisRoute = express.Router();

const NewsAPI = require('newsapi');
const newsAPI = new NewsAPI('441a9fdef00c4a55af5707cad4f57b38');

apisRoute.get('newsAPI/topHeadLines', (req,res, next)=> {
    newsAPI.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'      
      }).then(response => {
            console.log(response);
            res.json(response);
      }).catch(err => {
            res.send(err).status(500);
      })
})


module.exports = apisRoute;