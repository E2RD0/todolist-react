import React from "react";

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{  
      try{
        setTimeout(()=>{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
              try {
                var o = JSON.parse(localStorageItem);
                if (o && typeof o === "object") {
                  parsedItem = o;
                }
              } catch (e) {
                  parsedItem = localStorageItem;
              }
          }
          setItem(parsedItem);
          setLoading(false);
        }
        ,1000);
      }
      catch(err){
        setError(err);
      }
    }, [])
    
  
  
    const saveItem = (newItem) => {
      try{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      }
      catch(e){
        setError(e);
      }
  
    };
  
    return {item, saveItem, loading, error};
  
}

export { useLocalStorage };