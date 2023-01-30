const { conectar } = require('./conexion')

const savealbum = async ({ userId, title }) => {
    const conexion = await conectar()
    const query = `
          INSERT INTO albums
              (userId, title)
          VALUES
              ($1, $2)
          RETURNING *
      `
    const values = [userId, title]
    const result = await conexion.query(query, values)
    conexion.release()
    return result.rows[0]
  }


const albumById = async (id) => {
    const conexion = await conectar();
    const query = `
        SELECT *
        FROM
        albums
        WHERE id = $1
    `;
    const { rows : [album] } = await conexion.query(query, [id]);
    conexion.release();
    return album;
};

const deletealbum = async (id) => {
    const conexion = await conectar();
    const query = `
        UPDATE albums
        WHERE id = $1
        RETURNING *
    `;
    const result = await conexion.query(query, [id]);
    conexion.release();
    return result.rows[0];
}

module.exports ={
    savealbum,
    albumById,
    deletealbum
}