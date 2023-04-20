//reusable function to fecth all the products 
  export const getAllProducts = async () => {
    try {
    const response = await fetch('https://e-commerce-server-hhpk.onrender.com/items/all');
    const data = await response.json();

    // console.log(data);
    return data;
  
   } catch (error) {
    console.log(error);
     }
   };

  export default getAllProducts;

