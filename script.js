const products=[
{name:"Ayam Original",category:"Favorit",description:"Varian dasar dengan rasa gurih yang cocok untuk pelanggan baru.",price:"Rp18.000"},
{name:"Ayam Pedas",category:"Best Seller",description:"Pilihan bagi pelanggan yang menyukai karakter rasa lebih kuat.",price:"Rp19.000"},
{name:"Paket Hemat",category:"Value",description:"Pilihan paket untuk pembelian bersama, komunitas, atau event kecil.",price:"Rp35.000"}];

const grid=document.getElementById("productGrid");
products.forEach(p=>{
  const card=document.createElement("article");
  card.className="product";
  card.innerHTML=`<div class="tag">${p.category}</div><h3>${p.name}</h3><p>${p.description}</p><div class="price">${p.price}</div><button type="button" data-product="${p.name}">Minat Produk</button>`;
  grid.appendChild(card);
});

grid.addEventListener("click",e=>{
  const b=e.target.closest("button[data-product]");
  if(!b)return;
  const number="6281234567890"; // ganti dengan nomor WhatsApp bisnis
  const text=`Halo Tukang Marinasi, saya tertarik dengan ${b.dataset.product}.`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,"_blank");
});

document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("navToggle").addEventListener("click",()=>document.getElementById("navMenu").classList.toggle("open"));

document.getElementById("partnershipForm").addEventListener("submit",e=>{
  e.preventDefault();
  const number="6281234567890"; // ganti dengan nomor WhatsApp bisnis
  const name=document.getElementById("name").value.trim();
  const organization=document.getElementById("organization").value.trim();
  const collab=document.getElementById("collab").value;
  const message=document.getElementById("message").value.trim();
  const text=`Halo Tukang Marinasi, saya tertarik dengan peluang kolaborasi.\nNama: ${name}\nOrganisasi/Bisnis: ${organization}\nJenis kolaborasi: ${collab}\nPesan: ${message}`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,"_blank");
  document.getElementById("formResult").textContent="Draft WhatsApp sudah dibuat. Pastikan nomor tujuan sudah diganti.";
});
