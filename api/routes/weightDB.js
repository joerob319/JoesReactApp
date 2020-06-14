//PostGres connection logic

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'JoesReactDatabase',
  password: 'pass',
  port: 5432,
});

const getWeight = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM weight ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createWeight = (body) => {
    return new Promise(function(resolve, reject) {
        console.log (JSON.stringify(body))
      const { weight } = body
      pool.query('INSERT INTO weight (weight) VALUES ($1) RETURNING *', [weight], (error, results) => {
        if (error) {
          reject(error)
        }
        //resolve(`A new weight has been added added: ${results.rows[0]}`)
        resolve(console.log (results))
      })
    })
  }
  const deleteWeight = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Weight deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getWeight,
    createWeight,
    deleteWeight,
  }