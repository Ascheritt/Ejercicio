const { conectar } = require('./conexion')

const savepost = async ({ userId, title, body }) => {
    const conexion = await conectar()
    const query = `
          INSERT INTO posts
              (userId, title, body)
          VALUES
              ($1, $2, $3)
          RETURNING *
      `
    const values = [userId, title, body]
    const result = await conexion.query(query, values)
    conexion.release()
    return result.rows[0]
  }

  const postById = async (id) => {
    const conexion = await conectar();
    const query = `
        SELECT *
        FROM
        posts
        WHERE id = $1
    `;
    const { rows : [post] } = await conexion.query(query, [id]);
    conexion.release();
    return post;
};

const deletepost = async (id) => {
    const conexion = await conectar();
    const query = `
        UPDATE posts
        WHERE id = $1
        RETURNING *
    `;
    const result = await conexion.query(query, [id]);
    conexion.release();
    return result.rows[0];
}

module.exports ={
    savepost,
    postById,
    deletepost
}