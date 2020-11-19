// Create the function factorial here
function factorial(n) {
    if (n < 0) {
        throw "Input to 'factorial()' must be non-negative";
    } else if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * Expected Output:
 * 24
 */