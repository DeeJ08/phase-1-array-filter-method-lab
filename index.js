const findMatching = (drivers, nameToFind) => { 
  let lowerCaseName = nameToFind.toLowerCase(); 
  return drivers.filter(driver => driver.toLowerCase() === lowerCaseName); 
};

const fuzzyMatch = (drivers, query) => {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));   
    
};

const matchName = (drivers, query) => {
  return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}