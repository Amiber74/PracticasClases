import express from "express"
import StudentModel from '../models/EstModel.js'

const router = express.Router()

router.get('/', async(req, res)=>{

    let page = parseInt(req.query.page)
    if (!page){
        page=1
    }

    let result = await StudentModel.paginate({}, {page, limit: 1 , lean:true})

    result.title = 'Coder House'
    result.prevLink = result.hasPrevPage?`http://localhost:8080/studentes?page=${result.prevPage}`:'';
    result.nextLink = result.hasNextPage?`http://localhost:8080/studentes?page=${result.nextPage}`:'';
    result.isValid= !(page <= 0 || page > result.totalPages)

    res.render('index', result)

})

export default router