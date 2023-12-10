
let studentMarks = 69;

if (studentMarks >= 90 && studentMarks<101) {
  console.log('Grade: A');
} else if (studentMarks >= 70 && studentMarks < 90) {
  console.log('Grade: B');
} else if (studentMarks >= 50 && studentMarks < 70) {
  console.log('Grade: C');
} else {
    if (studentMarks>100) {
        console.log("Marks does not grater than 100");
    }
    else{
        console.log('Grade: F');

    }
}
