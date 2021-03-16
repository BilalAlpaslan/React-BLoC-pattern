import { entity } from 'simpler-state'
import {apiGetArticles} from '../API/article_api'

export const articles = entity([])

export const getArticles = by => {
    apiGetArticles(1).then(c =>{articles.set(c.data);console.log(c)});
}

