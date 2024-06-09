import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllKosts, filterKost } from "../../actions/kostAction";
import Navbar from './Navbar';

const MainPage = () => {
  const [kosts, setKosts] = useState([]);
  const [filter, setFilter] = useState({ daerah: '', jenis: '' });
  const navigate = useNavigate();

  const fetchKosts = async (filter = {}) => {
    const apiResponse = await fetchAllKosts(filter);
    if (apiResponse.success) {
      console.log("Response In MainPage.jsx");
      console.log(apiResponse.data);
      setKosts(apiResponse.data);
    } else {
      alert("Failed to fetch kosts");
    }
  };

  useEffect(() => {
    fetchKosts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await filterKost(filter);
      if (apiResponse.success) {
        setKosts(apiResponse.data);
      } else {
        alert("Failed to filter kosts");
      }
    } catch (error) {
      console.error("Error filtering kosts:", error);
      alert("Error filtering kosts");
    }
  };

  const handleKosanClick = (kosanId) => {
    navigate(`/kosan/${kosanId}`);
  };

  const mappedKosanData = kosts.map((kosan, index) => ({
    key: index,
    mykey: index,
    id: kosan.kosan_id,
    title: kosan.nama_kosan,
    price: kosan.harga,
    // image: "URL_GAMBAR_KOSAN",
    description: `
      Alamat: ${kosan.alamat}
      Kontak: ${kosan.kontak}
      Daerah Kosan: ${kosan.daerah_kosan}
      Jenis Kosan: ${kosan.jenis}
      Ukuran: ${kosan.ukuran}
      Listrik: ${kosan.listrik}
      Fasilitas: ${kosan.fasilitas}
      Status: ${kosan.status}
    `
  }));

  return (
<div>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen bg-lime-50 py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg mb-10">Is there any boarding home to your liking? Let us know.</p>
        <form className="mb-8" onSubmit={handleFilterSubmit}>
          <div className="flex space-x-4">
            <select name="daerah" value={filter.daerah} onChange={handleFilterChange} className="p-2 rounded">
              <option value="">Select Daerah</option>
              <option value="Pocin">Pocin</option>
              <option value="Kutek">Kutek</option>
              <option value="Barel">Barel</option>
              <option value="Kukel">Kukel</option>
              <option value="Kober">Kober</option>
            </select>
            <select name="jenis" value={filter.jenis} onChange={handleFilterChange} className="p-2 rounded">
              <option value="">Select Jenis</option>
              <option value="Putra">Putra</option>
              <option value="Putri">Putri</option>
              <option value="Campur">Campur</option>
            </select>
            <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded">Filter</button>
          </div>
        </form>
        <div className="mb-3">
          <button onClick={() => navigate("/review")} className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded mr-4">Review</button>
          <button onClick={() => navigate("/booking")} className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded">Booking</button>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          {mappedKosanData.map((kosan) => (
            <div key={kosan.key} className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 m-4 cursor-pointer" onClick={() => handleKosanClick(kosan.id)}>
              <h2 className="text-lg font-semibold mb-2">{kosan.title}</h2>
              <p className="text-sm mb-2">Price: {kosan.price}</p>
              <p className="text-sm mb-2">Description: {kosan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
