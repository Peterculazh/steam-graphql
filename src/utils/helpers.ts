export const removeDuplicates = (originalArray: Array<any>, prop: any): Array<any> => {
    let newArray: any = [];
    let lookupObject: any = {};

    for (let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}