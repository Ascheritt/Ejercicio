const albums =[
{
    userId: 1,
    id: 1,
    title: "quidem molestiae enim"
},
{
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa"
},
{
    userId: 1,
    id: 3,
    title: "omnis laborum odio"
},
{
    userId: 2,
    id: 11,
    title: "quam nostrum impedit mollitia quod et dolor"
},
{
    userId: 2,
    id: 12,
    title: "consequatur autem doloribus natus consectetur"
},
{
    userId: 2,
    id: 13,
    title: "ab rerum non rerum consequatur ut ea unde"
},
{
    userId: 3,
    id: 21,
    title: "repudiandae voluptatem optio est consequatur rem in temporibus et"
},
{
    userId: 3,
    id: 22,
    title: "et rem non provident vel ut"
},
{
    userId: 3,
    id: 23,
    title: "incidunt quisquam hic adipisci sequi"
}
];

const getAll = () => albums;

const getById = id => {return albums.find(album => album.id == id)};

const getIdU = userId => {return albums.find(album => album.userId == userId)};


module.exports ={
    getAll,
    getById,
    getIdU
}