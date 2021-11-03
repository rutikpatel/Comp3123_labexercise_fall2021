const mixedArray = ['PIZZA',10,true,25,false,'Wings']

function lowerCaseWords(mixedArray){
        return new Promise((resolve, reject) => {
          if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            
            let filter = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
            let lCaseWords = filter.map((eachItemOfFilterArr) =>
              eachItemOfFilterArr.toLowerCase()
            );
            resolve(lCaseWords);
          } else {
            reject("Please use a valid array");
          }
        });
    };
    
    lowerCaseWords(mixedArray)
      .then((value) =>
        console.log(value)
      )
      .catch((error) =>
        console.log("An error occured: "+error)
      );
