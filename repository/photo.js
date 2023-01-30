const { conectar } = require('./conexion')

const savephoto = async ({ albumId, title, url, thumbnailUrl }) => {
    const conexion = await conectar()
    const query = `
          INSERT INTO photos
              (albumId, title, url, thumbnailUrl)
          VALUES
              ($1, $2, $3, $4)
          RETURNING *
      `
    const values = [albumId, title, url, thumbnailUrl]
    const result = await conexion.query(query, values)
    conexion.release()
    return result.rows[0]
  }


  const photoById = async (id) => {
    const conexion = await conectar();
    const query = `
        SELECT *
        FROM
        photos
        WHERE id = $1
    `;
    const { rows : [photo] } = await conexion.query(query, [id]);
    conexion.release();
    return photo;
};

const deletephoto = async (id) => {
    const conexion = await conectar();
    const query = `
        UPDATE photos
        WHERE id = $1
        RETURNING *
    `;
    const result = await conexion.query(query, [id]);
    conexion.release();
    return result.rows[0];
}

module.exports ={
    savephoto,
    photoById,
    deletephoto
}