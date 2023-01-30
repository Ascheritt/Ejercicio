const { conectar } = require('./conexion')

const getAll = async () => {
  const conexion = await conectar()
  const query = `
        SELECT *
        FROM
        users
    `
  const result = await conexion.query(query)

  conexion.release()

  return result.rows
}


const getById = async (id) => {
  const conexion = await conectar()
  const query = `
        SELECT *
        FROM
        users
        WHERE id = $1
    `
  const { rows: [users] } = await conexion.query(query, [id])

  conexion.release()

  return paciente
}

const save = async ({ name, username, email, address_id, company_id, phone, website }) => {
  const conexion = await conectar()
  const query = `
        INSERT INTO users
            (name, username, email, address_id, company_id, phone, website)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `
  const values = [name, username, email, address_id, company_id, phone, website]
  const result = await conexion.query(query, values)
  conexion.release()
  return result.rows[0]
}

const deleteById = async (id) => {
  const conexion = await conectar()
  const query = `
        UPDATE users
        SET deleted_at = now()
        WHERE id = $1
        RETURNING *
    `
  const result = await conexion.query(query, [id])

  conexion.release()

  return result.rows[0]
}

module.exports = {
  getAll,
  getById,
  save,
  delete: deleteById
}
