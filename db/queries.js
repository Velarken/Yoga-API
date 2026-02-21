const pool = require('./pool.js');

const poseAPI = {
    getAllPoses: async ( req, res, next) => {
        const client = await pool.connect();
        try {
            const { rows } = await client.query(`
                SELECT * FROM yoga_poses
                ORDER BY id DESC
            `)
            res.json(rows)
        } catch (error) {
            throw error
        } finally {
            client.release()
        }
    }
}

module.exports = poseAPI;