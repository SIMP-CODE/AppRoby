import React, { useState } from 'react';

function Coba() {
  const [nama, setNama] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jam, setJam] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('Laki-laki');
  const [tingkatKeahlian, setTingkatKeahlian] = useState('Junior');

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Halo, saya ${nama}. Saya ingin membuat janji bertemu pada tanggal ${tanggal} pukul ${jam}. Saya seorang ${jenisKelamin} dengan tingkat keahlian ${tingkatKeahlian}.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/6281234567890?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input type="text" value={nama} onChange={(event) => setNama(event.target.value)} />
      </label>
      <br />
      <label>
        Tanggal:
        <input type="date" value={tanggal} onChange={(event) => setTanggal(event.target.value)} />
      </label>
      <br />
      <label>
        Jam:
        <input type="time" value={jam} onChange={(event) => setJam(event.target.value)} />
      </label>
      <br />
      <label>
        Jenis Kelamin:
        <br />
        <label>
          <input type="radio" value="Laki-laki" checked={jenisKelamin === 'Laki-laki'} onChange={(event) => setJenisKelamin(event.target.value)} />
          Laki-laki
        </label>
        <br />
        <label>
          <input type="radio" value="Perempuan" checked={jenisKelamin === 'Perempuan'} onChange={(event) => setJenisKelamin(event.target.value)} />
          Perempuan
        </label>
      </label>
      <br />
      <label>
        Tingkat Keahlian:
        <br />
        <label>
          <input type="radio" value="Junior" checked={tingkatKeahlian === 'Junior'} onChange={(event) => setTingkatKeahlian(event.target.value)} />
          Junior
        </label>
        <br />
        <label>
          <input type="radio" value="Senior" checked={tingkatKeahlian === 'Senior'} onChange={(event) => setTingkatKeahlian(event.target.value)} />
          Senior
        </label>
        <br />
        <label>
          <input type="radio" value="Master" checked={tingkatKeahlian === 'Master'} onChange={(event) => setTingkatKeahlian(event.target.value)} />
          Master
        </label>
      </label>
      <br />
      <button type="submit">Kirim Pesan WhatsApp</button>
    </form>
  );
}
export default Coba