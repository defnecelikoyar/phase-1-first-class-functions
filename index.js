function someshit() {
    console.log("dumb shit");
};

function fuck() {
    console.log("fuck this shit");
};

function receivesAFunction(fuck) {
    someshit();
    fuck();
};

function returnsANamedFunction() {
    return function named() {
        console.log('yup');
    };
};


function returnsAnAnonymousFunction() {
    return function() {
        console.log('okay');
    };
}