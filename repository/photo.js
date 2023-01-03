const photos =[
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
        albumId: 2,
        id: 51,
        title: "non sunt voluptatem placeat consequuntur rem incidunt",
        url: "https://via.placeholder.com/600/8e973b",
        thumbnailUrl: "https://via.placeholder.com/150/8e973b"
    },
    {
        albumId: 2,
        id: 52,
        title: "eveniet pariatur quia nobis reiciendis laboriosam ea",
        url: "https://via.placeholder.com/600/121fa4",
        thumbnailUrl: "https://via.placeholder.com/150/121fa4"
    },
    {
        albumId: 3,
        id: 101,
        title: "incidunt alias vel enim",
        url: "https://via.placeholder.com/600/e743b",
        thumbnailUrl: "https://via.placeholder.com/150/e743b"
    },
    {
        albumId: 3,
        id: 102,
        title: "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
        url: "https://via.placeholder.com/600/a393af",
        thumbnailUrl: "https://via.placeholder.com/150/a393af"
    }
];

const getAll = () => photos;

const getById = id => {return photos.find(photo => photo.id == id)};

const getIdPh = albumId => {return photos.find(photo => photo.albumId == albumId)};

module.exports ={
    getAll,
    getById,
    getIdPh
}
