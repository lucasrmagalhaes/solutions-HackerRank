/** 
 *    Write your code here. Read input using 'readLine()' 
 * and print output using 'console.log()'.
 *    Print the area of the circle:
 *    Print the perimeter of the circle:
 */

function main() {
    const PI = Math.PI;
    const r = parseFloat(readLine());

    console.log(PI * (r ** 2));
    console.log(2 * PI * r);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

/**
 * Expected Output:
 * 21.237166338267002
 * 16.336281798666924
 */