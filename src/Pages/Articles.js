import { useEntity } from 'simpler-state'
import { articles, getArticles } from '../BLoC/article_bloc'
import React, { useEffect } from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function App (){
    useEffect(() => {
        getArticles();
    });

    const article = useEntity(articles)

    return (
        <div>
            <Link to="/about"><Button>+</Button></Link>
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
