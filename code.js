var universitet = {
    group: {
        countOfStudents: 6,
        teacherOfGroup: 'Ismayil m',
        getAverageScore: function(){
            var a = universitet.students.student1.score;
            var b = universitet.students.student2.score;
            var c = universitet.students.student3.score;

            return 'The average score of the group is : ' + (a + b + c) / 3
        } 
    },
    students: {
        student1: {
            fullName: 'Kamal Mirzayev',
            score: 99,
            teacher: 'Ismayil m'
        },
        student2: {
            fullName: 'Nurlan Huseynov',
            score: 98,
            teacher: 'Ismayil m'
        },
        student3: {
            fullName: 'Resul Chunayev',
            score: 97,
            techer: 'Filankes m'
        },
        getInfo: function(){
            console.log(this.student1.fullName + ' : his score is ' + this.student1.score)
            console.log(this.student2.fullName + ' : his score is ' + this.student2.score)
            console.log(this.student3.fullName + ' : his score is ' + this.student3.score)
        },
        getTeacherName: function(){
            return this.student2.teacher
        }
    },
    teachers: {
        teacher0: {
            fullName: 'Ismayil m'
        },
        teacher1: {
            fullName: 'Filankesov m'
        },
        teacher2: {
            fullName: 'Behmankesov m'
        },
        countOfStudents: 6,
        countOfGroups: 2
    },
    bestOfAll: function(){
       var a = universitet.students.student1.score;
       var b = universitet.students.student2.score;
       var c = universitet.students.student3.score;

       if ( a > b && a > c) {
           console.log('The best student among others is ' + universitet.students.student1.fullName)
       } else if (b > c && b > a) {
        console.log('The best student among others is ' + universitet.students.student2.fullName)
       } else if ( c > b && c> a){
        console.log('The best student among others is ' + universitet.students.student3.fullName)
       } 
       /*else if ( a == b || a == c) {
        console.log('The best students are' + a + ' smone')
       }*/
    }


}

console.log(universitet.bestOfAll())
//console.log(universitet.students.getTeacherName())
console.log(universitet.group.getAverageScore())