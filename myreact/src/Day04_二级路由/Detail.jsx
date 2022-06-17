import React from 'react'
import { useLocation, useMatch, useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
    // state传参
    const { state: { id, title, content } } = useLocation();

    // search传参
    // const [search] = useSearchParams()
    // const id = search.get('id')
    // const title = search.get('title')
    // const content = search.get('content')
    // const l = useLocation();
    // console.log(l)


    // params传参
    // const { id, title, content } = useParams()
    // const m = useMatch('/ChildComponent2/1_1/detail/:id/:title/:content')
    // console.log(m)
    return (
        <ul>
            <li>
                {id}
            </li>
            <li>
                {title}
            </li>
            <li>
                {content}
            </li>
        </ul>
    )
}