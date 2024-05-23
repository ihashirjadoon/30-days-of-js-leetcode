function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    return arr.map(fn)
    const res = [];
    
    for (const i in arr){
        res.push(fn(arr [i], Number(i)))
    }
    return res;
    
};
