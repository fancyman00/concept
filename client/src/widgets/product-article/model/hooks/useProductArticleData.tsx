import {useEffect, useState} from "react";
import {ArticleApiType} from "../../../../entities/product/model/types.ts";
import {useGetArticleQuery} from "../../../../entities/product/api";

export const useProductArticleData = (id: number) => {
    const [articleItem, setArticleItem] = useState<ArticleApiType>()
    const {data, isSuccess} = useGetArticleQuery(id)
    useEffect(()=>{
        isSuccess && setArticleItem(data.data[0].attributes)
    }, [data, isSuccess])
    return {articleItem}
}