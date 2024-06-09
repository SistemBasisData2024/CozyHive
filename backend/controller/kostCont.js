const pool = require("./poolQuery.js");

addKost = async (req, res) => {
    const { nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status } = req.body;

    // Validate data types
    // if (!validateDataTypes(req.body)) {
    //     return res.status(400).json({ success: false, message: 'Invalid data types in request body' });
    // }

    try {
        const result = await pool.query(
            `INSERT INTO data_kosan (nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Failed to add kost', error: err.message });
    }
}

editKost = async (req, res) => {
    const { id } = req.params;
    const { nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status } = req.body;

    // Validate data types
    if (!validateDataTypes(req.body)) {
        return res.status(400).json({ success: false, message: 'Invalid data types in request body' });
    }

    try {
        const result = await pool.query(
            `UPDATE data_kosan
             SET nama_kosan = $1, kontak = $2, alamat = $3, daerah_kosan = $4, jenis = $5, ukuran = $6, listrik = $7, fasilitas = $8, harga = $9, status = $10
             WHERE id = $11
             RETURNING *`,
            [nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to edit kost', error: err.message });
    }
}

getAllKost = async (req, res) => {
    try {
      const { daerah, jenis } = req.body;
  
      let query = 'SELECT * FROM data_kosan WHERE 1=1';
      const params = [];
  
      if (daerah) {
        query += ' AND daerah_kosan = $1';
        params.push(daerah);
      }
  
      if (jenis) {
        query += params.length > 0 ? ' AND jenis = $2' : ' AND jenis = $1';
        params.push(jenis);
      }
  
      const result = await pool.query(query, params);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching kosan:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch kosans' });
    }
  };

addReview = async (req, res) => {
    const { kosan_id, user_id, rating, komentar, tanggal_review } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO review_kosan (kosan_id, user_id, rating, komentar, tanggal_review)
            VALUES($1, $2, $3, $4, $5) RETURNING *`,
            [kosan_id, user_id, rating, komentar, tanggal_review]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to add review', error: err.message });
    }
}

addBooking = async (req, res) => {
    const { kosan_id, user_id, start_date, end_date, booked } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO booking (kosan_id, user_id, start_date, end_date, booked)
            VALUES($1, $2, $3, $4, $5) RETURNING *`,
            [kosan_id, user_id, start_date, end_date, booked]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to add booking', error: err.message });
    }
}

getAllReviews = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM review_kosan;`
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to get all reviews', error: err.message });
    }
}

getAllBookings = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM booking;`
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to get all bookings', error: err.message });
    }
}

function validateDataTypes(data) {
    const validations = {
        id: 'number',
        nama_kosan: 'string',
        kontak: 'string',
        alamat: 'string',
        daerah_kosan: 'string',
        jenis: 'string',
        ukuran: 'number',
        listrik: 'string',
        fasilitas: 'string',
        harga: 'number',
        status: 'string'
    };

    const reviewValidations = {
        review_id: 'number',
        kosan_id: 'number',
        user_id: 'number',
        rating: 'number',
        komentar: 'string',
        tanggal_review: 'string'
    };

    const bookingValidations = {
        booking_id: 'number',
        kosan_id: 'number',
        user_id: 'number',
        start_date: 'string',
        end_date: 'string',
        booked: 'string'
    };

    const allValidations = { ...validations, ...reviewValidations, ...bookingValidations };

    for (const field in allValidations) {
        if (typeof data[field] !== allValidations[field]) {
            return false;
        }
    }
    return true;
}

module.exports = {
    addKost,
    editKost,
    getAllKost,
    addReview,
    addBooking,
    getAllReviews,
    getAllBookings
}
