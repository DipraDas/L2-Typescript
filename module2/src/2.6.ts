// Constraints
{

    const addCourseToStudent = <
        T extends {
            id: number,
            name: string,
            email: string
        }
    >
        (student: T) => {
        const course = 'Next Lvl Web Development';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id: 35,
        name: 'Mr.X',
        email: 'x@gmail.com'
    });
    const student2 = addCourseToStudent({
        id: 35,
        name: 'Mr.X',
        email: 'x@gmail.com',
        emni: 'emni'
    });



}