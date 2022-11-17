
const objCalculator = (arr, obj, props) => {


    arr.forEach(element => {
        switch (element.difficulty) {
            case '1':
                obj.difficulty.voted_1 = obj.difficulty.voted_1 + 1 * 100 / props.amountOfStudents
                break;
            case '2':
                obj.difficulty.voted_2 = obj.difficulty.voted_2 + 1 * 100 / props.amountOfStudents
                break;
            case '3':
                obj.difficulty.voted_3 = obj.difficulty.voted_3 + 1 * 100 / props.amountOfStudents
                break;
            case '4':
                obj.difficulty.voted_4 = obj.difficulty.voted_4 + 1 * 100 / props.amountOfStudents
                break;
            case '5':
                obj.difficulty.voted_5 = obj.difficulty.voted_5 + 1 * 100 / props.amountOfStudents
                break;
        }
        switch (element.fun) {
            case '1':
                obj.fun.voted_1 = obj.fun.voted_1 + 1 * 100 / props.amountOfStudents
                break;
            case '2':
                obj.fun.voted_2 = obj.fun.voted_2 + 1 * 100 / props.amountOfStudents
                break;
            case '3':
                obj.fun.voted_3 = obj.fun.voted_3 + 1 * 100 / props.amountOfStudents
                break;
            case '4':
                obj.fun.voted_4 = obj.fun.voted_4 + 1 * 100 / props.amountOfStudents
                break;
            case '5':
                obj.fun.voted_5 = obj.fun.voted_5 + 1 * 100 / props.amountOfStudents
                break;
        }
    })
}
export default objCalculator