import React,{useEffect, useState} from 'react';
import ItemList from './ItemList';
import Imagenes from '../assets/Imagenes';


function ItemListContainer(props) {
    
    const[loading,setLoanding]=useState(true);
    const[error,setError]=useState(false);
    const[producto,setproducto]=useState([]);
    useEffect(() => {
        setproducto([]);
        setLoanding(true);
        setError(error); 
     const articulos = new Promise((res,)=>{
            setTimeout(()=>{
            res([{category:"remeras", id:'1', title:'pack conjunto',  description:'conjunto de remera + zapatillas',  price:5000,  image:(Imagenes.img1) },
            {category:"remeras", id:'2', title:'remera linda',  description:'remera',  price:2000,  image:(Imagenes.img1) },
            {category:"remeras", id:'3', title:'remera no linda',  description:'conjunto de remera',  price:500,  image:(Imagenes.img1) },
            {category:"remeras", id:'4', title:'2 remeras',  description:'2 remeras',  price:2500,  image:(Imagenes.img4) },
            {category:"remeras", id:'5', title:'zapatos y lentes',  description:'zapatos y lentes',  price:500,  image:(Imagenes.img5) }])
        }, 2000);
    });
       
    articulos
     .then((result)=>{
         setproducto(result);
         
      })
      .catch((error)=>{
         setError(error);
         
      })
      .finally(()=>{
          setLoanding(false);
      });
 }, []);



    return (
        <>
        <div > {loading && 'loading..'}</div>
        <div > {error && 'hubo error en el pago'}</div>
    
        <div>
            <ItemList producto={producto} />
     </div>
        
        </>
    )
};

export default ItemListContainer;