const { conectar } = require('./conexion')

const savecomment = async ({ postId, name, email, body }) => {
    const conexion = await conectar()
    const query = `
          INSERT INTO comments
              (postId, name, email, body)
          VALUES
              ($1, $2, $3, $4)
          RETURNING *
      `
    const values = [postId, name, email, body]
    const result = await conexion.query(query, values)
    conexion.release()
    return result.rows[0]
  }

  const commentById = async (id) => {
    const conexion = await conectar();
    const query = `
        SELECT *
        FROM
        comments
        WHERE id = $1
    `;
    const { rows : [comment] } = await conexion.query(query, [id]);
    conexion.release();
    return comment;
};

const deletecomment = async (id) => {
    const conexion = await conectar();
    const query = `
        UPDATE comments
        WHERE id = $1
        RETURNING *
    `;
    const result = await conexion.query(query, [id]);
    conexion.release();
    return result.rows[0];
}

module.exports ={
    savecomment,
    commentById,
    deletecomment
}