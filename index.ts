type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type TimeSlot = "8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15";
type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

type Professor = {
    id: number;
    name: string;
    department: string;
};

type Classroom = {
    number: string;
    capacity: number;
    hasProjector: boolean;
};

type Course = {
    id: number;
    name: string;
    type: CourseType;
};

type Lesson = {
    courseId: number;
    professorId: number;
    classroomNumber: string;
    dayOfWeek: DayOfWeek;
    timeSlot: TimeSlot;
};

let professors: Professor[] = [];
let classrooms: Classroom[] = [];
let courses: Course[] = [];
let schedule: Lesson[] = [];

function addProfessor(professor: Professor): void {
    professors.push(professor);
}

function addLesson(lesson: Lesson): boolean {
    if (validateLesson(lesson) === null) {
        schedule.push(lesson);
        return true;
    }
    return false;
}

function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
    const occupiedClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);
    
    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}

function getProfessorSchedule(professorId: number): Lesson[] {
    return schedule.filter(lesson => lesson.professorId === professorId);
}

type ScheduleConflict = {
    type: "ProfessorConflict" | "ClassroomConflict";
    lessonDetails: Lesson;
};

function validateLesson(lesson: Lesson): ScheduleConflict | null {
    const professorConflict = schedule.find(existingLesson => 
        existingLesson.professorId === lesson.professorId && 
        existingLesson.dayOfWeek === lesson.dayOfWeek &&
        existingLesson.timeSlot === lesson.timeSlot
    );
    
    if (professorConflict) {
        return { type: "ProfessorConflict", lessonDetails: professorConflict };
    }

    const classroomConflict = schedule.find(existingLesson => 
        existingLesson.classroomNumber === lesson.classroomNumber &&
        existingLesson.dayOfWeek === lesson.dayOfWeek &&
        existingLesson.timeSlot === lesson.timeSlot
    );

    if (classroomConflict) {
        return { type: "ClassroomConflict", lessonDetails: classroomConflict };
    }

    return null;
}

function getClassroomUtilization(classroomNumber: string): number {
    const totalLessons = schedule.length;
    const classroomLessons = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;

    return (classroomLessons / totalLessons) * 100;
}

function getMostPopularCourseType(): CourseType {
    const courseTypeCounts = courses.reduce((acc, course) => {
        acc[course.type] = (acc[course.type] || 0) + 1;
        return acc;
    }, {} as Record<CourseType, number>);

    return Object.keys(courseTypeCounts).reduce((a, b) => 
        courseTypeCounts[a as CourseType] > courseTypeCounts[b as CourseType] ? a : b
    ) as CourseType;
}

function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
    const lesson = schedule.find(lesson => lesson.courseId === lessonId);

    if (lesson && !schedule.some(l => l.classroomNumber === newClassroomNumber && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot)) {
        lesson.classroomNumber = newClassroomNumber;
        return true;
    }

    return false;
}

function cancelLesson(lessonId: number): void {
    schedule = schedule.filter(lesson => lesson.courseId !== lessonId);
}
