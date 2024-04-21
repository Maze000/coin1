


module.exports = (app) => {






  app.get('/cryptos2', async (req, res) => {
    const ids = ['bitcoin', 'ethereum','ripple','litecoin']; 
  
   
    const promises = ids.map(id =>
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
        method: 'GET',
        headers: {
          
          'Authorization': `Bearer ${process.env.COINGECKO_API_KEY}`,
          
        }
      })


        .then(response => {
          if (!response.ok) {
           
            throw new Error(`Error al obtener datos para ${id}`);
          }
          return response.json(); 
        })
    );
  
    try {
     
      const results = await Promise.all(promises);
  
      
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener datos de las APIs' });
    }
  });

    

   
    
      

};
