import { Button, Flex, Input, Space, Tag } from "antd";
import Navbar from "../Components/Nav";
import Imager from "../assets/imager.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import Category from "../data/category.json";
import FooterImage from "../assets/footer.png";
import { Link } from "react-router";
// import "./index.css";

//here form seller
// function FormReg() {
//   // const [users, setUserss] = useState([])

//   const [form, setForm] = useState({
//     namaLengkap: "",
//     alamatProduk: "",
//     tanggalPenjualan: "",
//     metodePembayaran: "",
//     password: "",
//     konfirmasiPassword: "",
//     namaProduk: "",
//     kodeProduk: "",
//     jumlah: "",
//     harga: "",
//     pilihanSales: "",
//     pilihanPelanggan: [],
//     catatan: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setForm({
//         ...form,
//         pilihanPelanggan: checked
//           ? [...form.pilihanPelanggan, value]
//           : form.pilihanPelanggan.filter((item) => item !== value),
//       });
//     } else {
//       setForm({
//         ...form,
//         [name]: value,
//       });
//     }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(form);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Data submitted:", form);
//     }
//   };

//   const validateForm = (form) => {
//     const errors = {};
//     if (!form.namaLengkap.trim())
//       errors.namaLengkap = "Nama lengkap wajib diisi";
//     if (!form.alamatProduk.trim())
//       errors.alamatProduk = "Alamat produk wajib diisi";
//     if (!form.tanggalPenjualan)
//       errors.tanggalPenjualan = "Tanggal penjualan wajib diisi";
//     if (!form.metodePembayaran)
//       errors.metodePembayaran = "Metode pembayaran wajib dipilih";
//     if (!form.password) errors.password = "Password wajib diisi";
//     else if (form.password.length < 8) errors.password = "Minimal 8 karakter";
//     if (form.password !== form.konfirmasiPassword)
//       errors.konfirmasiPassword = "Password tidak sesuai";
//     if (!form.namaProduk.trim()) errors.namaProduk = "Nama produk wajib diisi";
//     if (!form.kodeProduk.trim()) errors.kodeProduk = "Kode produk wajib diisi";
//     if (!form.jumlah) errors.jumlah = "Jumlah wajib diisi";
//     if (!form.harga) errors.harga = "Harga wajib diisi";
//     return errors;
//   };

//   return (
//     <div className="container">
//       <form onSubmit={onSubmit}>
//         {/* ini untuk judul */}
//         <h2 className="title">Sistem Penjualan Langsung</h2>
//         {/* isi dari form saya */}
//         <div className="user-details">
//           {/* nama lengkap */}
//           <div className="input-box">
//             <label className="details">Nama Lengkap : </label>
//             <input type="text" name="namaLengkap" onChange={handleChange} />
//             {errors.namaLengkap && (
//               <span className="error-message">{errors.namaLengkap}</span>
//             )}
//           </div>
//           {/* ini untuk alamat */}
//           <div className="input-box">
//             <label className="details">Alamat Produk : </label>
//             <input type="text" name="alamatProduk" onChange={handleChange} />
//             {errors.alamatProduk && (
//               <span className="error-message" style={{ color: "red" }}>
//                 {errors.alamatProduk}
//               </span>
//             )}
//           </div>
//           {/* ini untuk tanggal penjualan */}
//           <div className="input-box">
//             <label className="details">Tanggal Penjualan : </label>
//             <input
//               type="date"
//               name="tanggalPenjualan"
//               onChange={handleChange}
//             />
//             {errors.tanggalPenjualan && (
//               <span className="error-message">{errors.tanggalPenjualan}</span>
//             )}
//           </div>
//           {/* ini untuk metode pembayaran */}
//           <div className="input-box">
//             <label className="details">Metode Pembayaran : </label>
//             <select name="metodePembayaran" onChange={handleChange}>
//               <option value="">Pilih metode pembayaran</option>
//               <option value="tunai">Tunai</option>
//               <option value="transfer">Transfer Bank</option>
//               <option value="kartu-kredit">Kartu Kredit</option>
//             </select>
//             {errors.metodePembayaran && (
//               <span className="error-message">{errors.metodePembayaran}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label className="details">Password:</label>
//             <input type="password" name="password" onChange={handleChange} />
//             {errors.password && (
//               <span className="error-message">{errors.password}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label className="details">Konfirmasi Password:</label>
//             <input
//               type="password"
//               name="konfirmasiPassword"
//               onChange={handleChange}
//             />
//             {errors.konfirmasiPassword && (
//               <span className="error-message">{errors.konfirmasiPassword}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label className="details">Nama Produk:</label>
//             <input type="text" name="namaProduk" onChange={handleChange} />
//             {errors.namaProduk && (
//               <span className="error-message">{errors.namaProduk}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label className="details">Kode Produk:</label>
//             <input type="number" name="kodeProduk" onChange={handleChange} />
//             {errors.kodeProduk && (
//               <span className="error-message">{errors.kodeProduk}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label className="details">Jumlah:</label>
//             <input type="number" name="jumlah" onChange={handleChange} />
//             {errors.jumlah && (
//               <span className="error-message">{errors.jumlah}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label className="details">Harga Satuan:</label>
//             <input type="number" name="harga" onChange={handleChange} />
//             {errors.harga && (
//               <span className="error-message">{errors.harga}</span>
//             )}
//           </div>

//           <div className="checkbox">
//             <label>Pilihan Pelanggan:</label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="pilihanPelanggan"
//                 value="Setuju"
//                 onChange={handleChange}
//               />{" "}
//               Setuju
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="pilihanPelanggan"
//                 value="Tidak Setuju"
//                 onChange={handleChange}
//               />{" "}
//               Tidak Setuju
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="pilihanPelanggan"
//                 value="Terserah Lah"
//                 onChange={handleChange}
//               />{" "}
//               Terserah Lah
//             </label>
//           </div>

//           <div className="input-box">
//             <label>Catatan:</label>
//             <textarea
//               name="catatan"
//               rows="4"
//               cols="50"
//               onChange={handleChange}
//               placeholder="Masukkan pesan anda..."
//             ></textarea>
//           </div>
//         </div>

//         <div className="button">
//           <input type="submit" value="Daftarkan" />
//         </div>
//       </form>
//     </div>
//   );
// }

export function FooterContext() {
  let Medsos = [
    {
      icon: "mdi:instagram",
      url: "https://www.instagram.com/rovino_ramadhani/",
    },
    { icon: "cib:facebook", url: "https://www.facebook.com/rovinor/" },
    {
      icon: "simple-icons:linkedin",
      url: "https://www.linkedin.com/in/rovino-ramadhani/",
    },
  ];
  return (
    <footer className="bg-black/20 pt-10 pb-5">
      <div className="grid md:grid-cols-3 gap-5 w-11/12 mx-auto">
        <div>
          <p className="text-5xl font-semibold text-white">Get Sale Buy</p>
          <Flex gap={10} className="mt-5">
            {Medsos.map((dt, id) => {
              return (
                <a
                  target="_blank"
                  href={dt.url}
                  key={`medsos_${id}`}
                  className="bg-white/30 flex justify-center items-center w-9 h-9 rounded-full"
                >
                  <Icon icon={dt.icon} className="text-xl text-white" />
                </a>
              );
            })}
          </Flex>
          <Flex gap={10} className="mt-10">
            {/* <p className="font-semibold text-white">Home</p>
            <p className="font-semibold text-white">Work</p>
            <p className="font-semibold text-white">Blog</p>
            <p className="font-semibold text-white">About</p> */}
          </Flex>
        </div>
        <Flex justify="center" align="center" vertical={true}>
          <div>
            <p className="mb-3 font-semibold text-white">Subscribe to WAOW</p>
            <Space.Compact>
              <Input />
              <Button type="primary">Submit</Button>
            </Space.Compact>
          </div>
        </Flex>
        <Flex justify="center" align="center">
          <img src={FooterImage} className="h-[200px]" alt="" />
        </Flex>
      </div>
    </footer>
  );
}

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="w-10/12 md:w-8/12 mx-auto my-10">
      <p className="text-xl font-semibold text-white mb-5">Contact Us</p>
      <form onSubmit={handleSubmit} className="bg-secondary p-5 rounded-xl">
        <div className="mb-4">
          <label className="text-white block mb-2">Name</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Email</label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Message</label>
          <Input.TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </div>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      {/* <FormReg /> */}
      {/* <CategoryList /> */}
      <FormComponent />
      {/* <VideoContext /> */}
      <FooterContext />
    </>
  );
}
