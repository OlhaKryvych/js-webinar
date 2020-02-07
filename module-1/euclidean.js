/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
    let gcd;
    /*
     * Your task is to compute the greatest common divisor of
     * the numbers given in a and b variables, using the
     * Euclidean algorithm (https://en.wikipedia.org/wiki/Euclidean_algorithm).
     * If you have the result, assign it to the variable, called gcd.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if(a > 0 && b > 0){
        nod = (a, b)=> {
            if(a < b){
                [a, b] = [b, a]
            }
            let rest = a % b
            if(rest === 0){
                return b
            }
            return nod(b, rest)
        }
        gcd = nod(a, b)
    }else {
        gcd = 0
    }
    // ...AND THIS COMMENT LINE!
    return gcd;
}
module.exports = euclidean;