export function searchByFullName(searchString, cache) {

    let searchStr = searchString.toLowerCase();

    if (searchStr !== null && searchStr !== "") {
        let filteredCahe = [];
        for (let i of cache) {
            let fullName = (`${i.firstName} ${i.middleName} ${i.lastName}`).toLowerCase();
            if(fullName.indexOf(searchStr) + 1) { filteredCahe.push(i); }
        }
        return filteredCahe;
    }
    return cache;
}
