 const productos = [
      {
        id: 1,
        name: "Nike Dunk Panda",
        marca: "Nike",
        precio: 65000,
        descripcion: "Zapatillas clásicas en blanco y negro.",
        stock: 10,
        imagen: "https://i.postimg.cc/SxNsbVXQ/Whats-App-Image-2025-05-27-at-11-25-39-1.jpg",
      },
      {
        id: 2,
        name: "Nike Dunk Teddy Bear",
        marca: "Nike",
        precio: 68000,
        descripcion: "Edición limitada con diseño inspirado en ositos.",
        stock: 5,
        imagen: "https://i.postimg.cc/3NXRYcCN/Whats-App-Image-2025-05-27-at-11-38-11.jpg",
      },
      {
        id: 3,
        name: "Nike Dunk Gris",
        marca: "Nike",
        precio: 62000,
        descripcion: "Modelo sobrio en tonos grises.",
        stock: 8,
        imagen: "https://i.postimg.cc/mk8wX8zz/Whats-App-Image-2025-05-27-at-11-25-38.jpg",
      },
      {
        id: 4,
        name: "Pumas 180",
        marca: "Puma",
        precio: 54000,
        descripcion: "Diseño deportivo con suela alta.",
        stock: 12,
        imagen: "https://i.postimg.cc/LsQgbwNM/Whats-App-Image-2025-05-27-at-11-28-41.jpg",
      },
      {
        id: 5,
        name: "Pumas Suede XL",
        marca: "Puma",
        precio: 58000,
        descripcion: "Clásicas de gamuza con diseño XL.",
        stock: 7,
        imagen: "https://i.postimg.cc/NF9MS0L6/Whats-App-Image-2025-05-27-at-11-27-09.jpg",
      },
      {
        id: 6,
        name: "Nike Air Force 1",
        marca: "Nike",
        precio: 70000,
        descripcion: "Ícono urbano de Nike con gran confort.",
        stock: 15,
        imagen: "https://i.postimg.cc/wTDJjWTh/Whats-App-Image-2025-05-27-at-11-28-02.jpg",
      },
      {
        id: 7,
        name: "Adidas Campus Negras",
        marca: "Adidas",
        precio: 60000,
        descripcion: "Zapatillas negras con estilo retro.",
        stock: 9,
        imagen: "https://i.postimg.cc/G3V9YvSq/Whats-App-Image-2025-05-27-at-11-27-31.jpg",
      },
      {
        id: 8,
        name: "Adidas Campus Grises",
        marca: "Adidas",
        precio: 60000,
        descripcion: "Versión gris con el mismo diseño clásico.",
        stock: 9,
        imagen: "https://i.postimg.cc/x8zfgFFg/Whats-App-Image-2025-05-27-at-11-27-52.jpg",
      },
      {
        id: 9,
        name: "New Balance 550",
        marca: "New Balance",
        precio: 72000,
        descripcion: "Estilo vintage con excelente calidad.",
        stock: 6,
        imagen: "https://i.postimg.cc/Prnp9mzN/Whats-App-Image-2025-05-27-at-11-29-23.jpg",
      },
];
    
let error = false
export const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (!error) {
            resolve(productos)
          }
          else {
              reject("Hubo un error")
          }
      }, 3000); 
    });
};
  



export const getProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(id));
      producto ? resolve(producto) : reject("Producto no encontrado");
    }, 500);
  });
};
