pragma solidity ^0.4.0;

contract Students {
    
    // Structs
    struct student {
        uint attendance;
        uint marks;
        address teacher;
        address parent;
        string name;
        string course;
        string employer;
        string proficiency;
    }
    
    // Mappings
    mapping (address => uint) permission; //Teach:0 Parent:1 Emp:2
    mapping (address => string) peepNames;
    
    // Events
    event NewStudent(string studentName, uint studentId, string teacherName);
    event NewEmp(string empName, address empAddress);
    event NewTeacher(string teacherName, address teacherAddress);
    event MarksUpdated(string studentName, uint studentId, uint from, uint to);
    event AttendanceUpdated(string studentName, uint studentId, uint from, uint to);
    event CourseUpdated(string studentName, uint studentId, string from, string to);
    event ProfUpdated(string studentName, uint studentId, string from, string to);
    event StudentEmployed(string studentName, uint studentId, string empName, address empAddress);
    event YesParent(string studentName, uint studentId, string parentName, address parentAddress);
    
    // Modifiers
    modifier onlyTeacher(uint studentId) {
        require(msg.sender==students[studentId].teacher);
        _;
    }
    
    modifier onlyParent(uint studentId) {
        require(msg.sender==students[studentId].parent);
        _;
    }
    
    modifier ifTeacher(address addr) {
         require(permission[addr]==0);
         _;
     }
     
    modifier ifEmp(address addr) {
        require(permission[addr]==2);
        _;
    }
    
    
    // BigShiz
    student[] public students;
    
    // Functions
    function createStudent( uint _attendance,
                            uint _marks,
                            address parentAddress,
                            string parentName,
                            string studentName,
                            string _course,
                            string _prof) public ifTeacher(msg.sender) {
                                
        peepNames[parentAddress] = parentName;
        permission[parentAddress] = 1;
        
        uint studentId = students.push(student( _attendance,
                                                _marks,
                                                msg.sender,
                                                parentAddress,
                                                studentName,
                                                _course,
                                                "none",
                                                _prof)) - 1;
        emit NewStudent(studentName, studentId, peepNames[msg.sender]);
    }

    function createTeacher(string newTeacherName, address newTeacherAddress) public ifTeacher(msg.sender) {
        emit NewTeacher(newTeacherName, newTeacherAddress);
        permission[newTeacherAddress] = 0;
        peepNames[newTeacherAddress] = newTeacherName;
    }
    
    function createEmp(string newEmpName, address newEmpAddress) public ifTeacher(msg.sender) {
        emit NewEmp(newEmpName, newEmpAddress);
        permission[newEmpAddress]=2;
        peepNames[newEmpAddress]=newEmpName;
    }
    
    function updateMarks(uint studentId, uint newMarks) public onlyTeacher(studentId) {
        student memory s = students[studentId];
        emit MarksUpdated(s.name, studentId, s.marks, newMarks);
        s.marks = newMarks;
    }
    
    function updateAttendance(uint studentId, uint newAttendance) public onlyTeacher(studentId) {
        emit AttendanceUpdated(students[studentId].name, studentId, students[studentId].attendance, newAttendance);
        students[studentId].attendance = newAttendance;
    }
    
    function updateCourse(uint studentId, string newCourse) public onlyTeacher(studentId) {
        emit CourseUpdated(students[studentId].name, studentId, students[studentId].course, newCourse);
        students[studentId].course = newCourse;
    }
    
    function updateProficiency(uint studentId, string newProficiency) public onlyTeacher(studentId) {
        emit ProfUpdated(students[studentId].name, studentId, students[studentId].proficiency, newProficiency);
        students[studentId].proficiency = newProficiency;
    }
    
    function getStudent(uint studentId) public view 
    returns(string name,
            address teacher,
            address parent,
            string course,
            uint marks,
            uint attendance,
            string employer,
            string proficiency) {
                
        student memory s = students[studentId];
        return (s.name,
                s.teacher,
                s.parent,
                s.course,
                s.marks,
                s.attendance,
                s.employer,
                s.proficiency);
    }
    
    function employStudent(uint studentId) public ifEmp(msg.sender) {
        students[studentId].employer = peepNames[msg.sender];
        emit StudentEmployed(students[studentId].name, studentId, peepNames[msg.sender], msg.sender);
    }
    
    function maybeSomething(uint studentId) public view onlyParent(studentId) {
        emit YesParent(students[studentId].name, studentId, peepNames[msg.sender], msg.sender);
    }
    
}