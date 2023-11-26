
//Dimesions
Array.dim = function(dimesion, initial){
    var a = [],i;
    for(i=0; i < dimesion; i++){
        a[i] = initial;
    }
    return a;
};

var myArray = Array.dim(20,1);

//Matrix
var matrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];

var result = matrix[2][1];


//To make a two-dimensional array or an array of arrays, you must build the arrys yourseft;
var my_array = [];
var n = 10;
for (i=0; i<n; i+=1){
    my_array[i] = [];
}


Array.matrixs = function(m,n, initial){
    var a , i, j, mat = [];
    for(i = 0; i<m; i+=1){
        a = [];
        for(j = 0; j<n; j+=1){
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
}
var result = Array.matrixs(2,4,5);

Array.identity = function(n){
    var i, mat = Array.matrix(n,n,0);
    for(i=0;i<n; i+= 1){
        mat[i][i] = 1;
    }
    return mat;
}
var myMatrix = Array.identity(4);
console.log(myMatrix[3][3]);
