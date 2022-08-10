const array = [70,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    for (i in array)
        i += array[i];
}