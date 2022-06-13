const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array , name){
    return array.filter((match) => match.toLowerCase() === name.toLowerCase())
}
const fuzzyMatch = (array,names)=>{
    let newArray = []
    for (const name of array){
        if ( name.slice(0,1) === names.slice(0,1)){
            newArray.push(name)
        }
    }
    return newArray
}
const matchName = (array,structure)=>{
    const newDataArray=[]
    for (const dataStruct of array){
        if (dataStruct.name.toLowerCase()=== structure.toLowerCase()||
        dataStruct.hometown.toLowerCase()=== structure.toLowerCase()){
            newDataArray.push(dataStruct)
        }
    }
    return newDataArray
}