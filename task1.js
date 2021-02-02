let a = [
    {id: 1, value: 3},
    {id: 2, value: 7},
    {id: 3, value: 3},
    {id: 4, value: 1},
    {id: 5, value: 4}
];

function returnElement(arr){
    const checked = {};
    let occurences = {};
    let values = [];
    let lastTwice;
    let result;

    arr.forEach(el => {
        // Find occurences of each value in the array
        if (!checked[el.value]){ //See if element is checked, if not it assigns key-value pair of number and bool of true
            checked[el.value] = true;
            values.push(el.value);
            occurences[el.value] = arr.reduce((i, obj) => {  //Count occurencies of a given element
                return i + (obj.value === el.value);
            }, 0);
            if(occurences[el.value] > 1){
                lastTwice = el.value;
            }
        }

    });
    
    values.sort((a,b) => a - b); // Sort array for easier iteration

    // Array sliced for easier iteration

    let sliced = values.slice(values.indexOf(lastTwice));

    console.log(sliced);

    //Find first available number
    for(let i = 1; i < sliced.length; i++){
        if(sliced[i] - sliced[i - 1] != 1){
            result = sliced[i-1] + 1;
            break;
        } else result = sliced[i] + 1;
    }

    console.log(result);

    return {id: arr.length + 1, value: result};
}

console.log(returnElement(a));