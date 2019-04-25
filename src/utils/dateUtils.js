export function dateDiff(first, second) {

    if(second < first){
        throw new Error("Second date can't be before first date");
    }
    return Math.round((second-first)/(1000*60*60*24));
}