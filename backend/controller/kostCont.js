const pool = require ("./poolQuery.js");

async function addKost(req, res) {
    const { nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status } = req.body;

    // Validate data types
    if (!validateDataTypes(req.body)) {
        return res.status(400).json({ success: false, message: 'Invalid data types in request body' });
    }

    try {
        const result = await pool.query(
            `INSERT INTO data_kosan (nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to add kost', error: err.message });
    }
}

async function editKost(req, res) {
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
             WHERE kosan_id = $11
             RETURNING *`,
            [nama_kosan, kontak, alamat, daerah_kosan, jenis, ukuran, listrik, fasilitas, harga, status, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to edit kost', error: err.message });
    }
}

function validateDataTypes(data) {
    const validations = {
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

    const invalidFields = [];

    for (const field in validations) {
        if (typeof data[field] !== validations[field]) {
            invalidFields.push(field);
        }
    }

    return invalidFields;
}



module.exports = { addKost, editKost };
