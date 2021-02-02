let obj = {
    property1: {
        property2: "Apple",
        property3: 'Orange'
    }
}

function lookUp(obj, path){
    let current;
    try{
        if (typeof(obj) !== 'object' || typeof(path) !== 'string'){
            current = "No results found";
            throw "You need to pass an Object and a string";
        }
        let elements = path.split('.');
        current = obj;
        for(let el of elements){
            if(current.hasOwnProperty(el)){
                current = current[el];
            }else throw `Object does not have ${el} property. This is least we can take you: `;
        }
    } catch(err){
        console.log(err);
    }

    return current;
}

console.log(lookUp(obj, "property1.property2"));