const pool = require ("./poolQuery.js");

signUp = async(req, res) =>{
    const{username, email, password, telepon} = req.body;
    const booked_kosan = null;
    try{
        const result = await pool.query(
            `INSERT INTO user_profile (username, email, password, telepon, booked_kosan)
            VALUES($1, $2, $3, $4, $5) RETURNING *`,
            [username, email, password, telepon, booked_kosan]
        );
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

login = async(req, res) =>{
    const{email, password} = req.body;
    //console.log(req.body);
    try{
        const result = await pool.query(
            `SELECT * FROM user_profile WHERE email = $1 AND password = $2`,
            [email, password]
        );

        if(result.rows.length == 0){
            return res.status(401).json("User tidak ditemukan");
        }
        
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

module.exports = {
    login, signUp
}