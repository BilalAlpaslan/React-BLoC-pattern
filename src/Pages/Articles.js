import { useEntity } from 'simpler-state'
import { articles, getArticles } from '../BLoC/article_bloc'
import React, { Component } from "react";


export function Appf (){
    
    const article = useEntity(articles)

    return (
        <div>
            {article.length > 0  ?(
                article.map(article =>
                    <><br/><br/>
                    <div id={article.id} className={"container"} style={{"backgroundColor":"aliceblue","radius":"25","padding":"150","margin":"150",}}>
                        <h1>{article.title}</h1><hr/><br/>
                        <div dangerouslySetInnerHTML={{ __html: article.body }} />
                    </div>
                    </>
                    )
            ):(<div>veri yok</div>)}
        </div>
    )
}


export default class App extends Component{
    componentDidMount=()=> getArticles();
    render =()=> <Appf/>
}