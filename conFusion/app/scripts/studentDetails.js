app.service('studentService', function () {
    this.getStudents = function () {
        return students;
    };


this.insertStudent = function (firstName, lastName, city) {
        var topID = students.length + 1;
        students.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteStudent = function (id) {
        for (var i = students.length - 1; i >= 0; i--) {
            if (students[i].id === id) {
                students.splice(i, 1);
                break;
            }
        }
    };

    this.getStudent = function (id) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                return students[i];
            }
        }
        return null;
    };


var students = [
	{
		id: 1, firstName: 'Mark', lastName: 'Carroll1', address: '1234 Anywhere St.', city: 'Phoenix1'
	},
	{
		id: 2, firstName: 'John', lastName: 'Carroll2', address: '1234 Anywhere St.', city: 'Phoenix2'
	},
	{
		id: 3, firstName: 'Sara', lastName: 'Carroll3', address: '1234 Anywhere St.', city: 'Phoenix3'
	},
	{
		id: 4, firstName: 'Tom', lastName: 'Carroll4', address: '1234 Anywhere St.', city: 'Phoenix4'
	},
	{
		id: 5, firstName: 'Pam', lastName: 'Carroll5', address: '1234 Anywhere St.', city: 'Phoenix5'
	},
	{
		id: 6, firstName: 'Catherine', lastName: 'Carroll6', address: '1234 Anywhere St.', city: 'Phoenix6'
	},
	{
		id: 7, firstName: 'Mary', lastName: 'Carroll7', address: '1234 Anywhere St.', city: 'Phoenix7'
	},
	{
		id: 8, firstName: 'Mike', lastName: 'Carroll8', address: '1234 Anywhere St.', city: 'Phoenix8'
	}

	];
});