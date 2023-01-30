const { conectar } = require('./conexion')

const savetodo = async ({ userId, title, completed }) => {
    const conexion = await conectar()
    const query = `
          INSERT INTO todos
              (userId, title, completed)
          VALUES
              ($1, $2, $3)
          RETURNING *
      `
    const values = [userId, title, completed]
    const result = await conexion.query(query, values)
    conexion.release()
    return result.rows[0]
  }

const todoById = async (id) => {
    const conexion = await conectar();
    const query = `
        SELECT *
        FROM
        todos
        WHERE id = $1
    `;
    const { rows : [todo] } = await conexion.query(query, [id]);
    conexion.release();
    return todo;
};

const deletetodo = async (id) => {
    const conexion = await conectar();
    const query = `
        UPDATE todos
        WHERE id = $1
        RETURNING *
    `;
    const result = await conexion.query(query, [id]);
    conexion.release();
    return result.rows[0];
}

module.exports ={
    savetodo,
    todoById,
    deletetodo
}
