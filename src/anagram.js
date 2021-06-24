/*
* Given I have the 'isAnagram' Function
* When 'isAnagram' received two 'Strings'
* Then I validate that one 'string' is an anagram of 'string2'
*
*/

const isAnagram = (string,string2) => {

    // create two maps;
    let map = {};
    let map2 = {};
    // iterate first string to get the chars
    string.split("").forEach(char => {
        // save the number of times that a char is repeated
        map[char] = !map[char] ? 1 : map[char] += 1;
    });    
    
    // iterate second string to get the chars    
    string2.split("").forEach(char => {
        // save the number of times that a char is repeated
        map2[char] = !map2[char] ? 1 : map2[char] += 1;
    });

    // reorder the elements of both maps
    map = Object.keys(map).sort().map(element => ([element, map[element]]));                    ;
    map2 = Object.keys(map2).sort().map(element => ([element, map2[element]]));
    // validate that both maps are the same
    console.log(map);
    console.log(map2);
    let result = true;
    map.forEach(element => {
        if (map[element] !== map2[element]) result = false;
    });
    console.log(result);
}

isAnagram("indio","onidi");
isAnagram("indio","india");