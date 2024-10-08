export const fetchPhotos = async (tags) => {
  try{
    const response = await fetch(`http://localhost:3001/fetchPhotos?tags=${tags}`);
    const data = await response.json();
    return data.items
  } catch(error){
    console.log(error);
    return [];
  }
};

  