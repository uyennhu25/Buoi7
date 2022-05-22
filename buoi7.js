//Câu 1
let equation = (a, c) => {
    console.log("x = " + (c * -1 / a))
}

equation(5, 8)

//Câu 2
let triangle = (a, b) => {
    //Cạnh huyền
    let c = Math.sqrt((a * a) + (b * b))
    console.log("Cạnh huyền là: " + (c))

    //Đường cao
    console.log("Ba đường cao của tam giác lần lượt là: " + (a) + ", " + (b) + ", " + ( a * b / c))

    //Góc cạnh bên
    //=(
}
triangle(3, 4)