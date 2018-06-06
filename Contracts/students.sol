pragma solidity ^0.4.0;

contract Students {

    //Ownable inda
    address public owner;   

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0));
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // Structs and definitions
    uint fee = 0.01 ether;
    struct student {
        uint attendance;
        uint marks;
        uint HWcount;
        address studentAddr;
        address teacher;
        address parent;
        string name;
        string course;
        string employer;
        string proficiency;
    }

    // Mappings
    mapping (address => uint) permission; // Student:0 Parent:1 Emp:2 Teacher:3
    mapping (address => string) peepNames;

    // Events
    event NewStudent(string indexed studentName, uint indexed studentId, address indexed studentAddress, string teacherName);
    event NewEmp(string indexed empName, address indexed empAddress);
    event NewTeacher(string indexed teacherName, address indexed teacherAddress);
    event MarksUpdated(string indexed studentName, uint studentId, uint indexed from, uint indexed to);
    event AttendanceUpdated(string indexed studentName, uint studentId, uint indexed from, uint indexed to);
    event CourseUpdated(string indexed studentName, uint studentId, string indexed from, string indexed to);
    event ProfUpdated(string indexed studentName, uint studentId, string indexed from, string indexed to);
    event NewHW(string indexed studentName, uint indexed studentId, uint presentHWCount);
    event HWDone(string indexed studentName, uint indexed studentId, address indexed studentAddress);
    event StudentEmployed(string indexed studentName, uint studentId, string indexed empName, address indexed empAddress);
    event YesParent(string indexed studentName, uint studentId, string indexed parentName, address indexed parentAddress);

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
         require(permission[addr]==3);
         _;
     }

    modifier ifEmp(address addr) {
        require(permission[addr]==2);
        _;
    }

    modifier ifLegitStudent(uint studentId) {
        require(permission[msg.sender]==0);
        require(msg.sender==students[studentId].studentAddr);
        _;
    }


    // BigShiz
    student[] public students;

    // Functions
    function createStudent( uint _attendance,
                            uint _marks,
                            address _studentAddress,
                            address _parentAddress,
                            string _parentName,
                            string _studentName,
                            string _course,
                            string _prof) public payable /*ifTeacher(msg.sender)*/ {

        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);


        peepNames[_parentAddress] = _parentName;
        permission[_parentAddress] = 1;
        permission[_studentAddress] = 0;

        uint studentId = students.push(student( _attendance,
                                                _marks,
                                                0,
                                                _studentAddress,
                                                msg.sender,
                                                _parentAddress,
                                                _studentName,
                                                _course,
                                                "none",
                                                _prof)) - 1;
        emit NewStudent(_studentName, studentId, _studentAddress, peepNames[msg.sender]);
    }

    // Only Teacher can create new Emp
    function createEmp(string newEmpName, address newEmpAddress) public payable ifTeacher(msg.sender) {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);
        emit NewEmp(newEmpName, newEmpAddress);
        permission[newEmpAddress]=2;
        peepNames[newEmpAddress]=newEmpName;
    }

    // Only the student's teacher can edit info and give homework
    function updateMarks(uint studentId, uint newMarks) public payable onlyTeacher(studentId) {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);

        student memory s = students[studentId];
        emit MarksUpdated(s.name, studentId, s.marks, newMarks);
        s.marks = newMarks;
    }

    function updateAttendance(uint studentId, uint newAttendance) public payable onlyTeacher(studentId) {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);

        emit AttendanceUpdated(students[studentId].name, studentId, students[studentId].attendance, newAttendance);
        students[studentId].attendance = newAttendance;
    }

    function updateCourse(uint studentId, string newCourse) public payable onlyTeacher(studentId) {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);

        emit CourseUpdated(students[studentId].name, studentId, students[studentId].course, newCourse);
        students[studentId].course = newCourse;
    }

    function updateProficiency(uint studentId, string newProficiency) public payable onlyTeacher(studentId) {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);

        emit ProfUpdated(students[studentId].name, studentId, students[studentId].proficiency, newProficiency);
        students[studentId].proficiency = newProficiency;
    }

    function newHW(uint studentId) public onlyTeacher(studentId) {
        students[studentId].HWcount++;
        emit NewHW(students[studentId].name, studentId, students[studentId].HWcount);
    }

    // Anyone can view student details
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

    // Only an employer can employ a student
    function employStudent(uint studentId) public payable ifEmp(msg.sender) {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);

        students[studentId].employer = peepNames[msg.sender];
        emit StudentEmployed(students[studentId].name, studentId, peepNames[msg.sender], msg.sender);
    }

    // Parent does Maybe Something
    function maybeSomething(uint studentId) public onlyParent(studentId) {
        emit YesParent(students[studentId].name, studentId, peepNames[msg.sender], msg.sender);
    }

    // Student can able to finish HWcount
    function finishHW(uint studentId) public ifLegitStudent(studentId) {
        students[studentId].HWcount=0;
        emit HWDone(students[studentId].name, studentId, msg.sender);
    }

    // Only Owner functions
    function createTeacher(string newTeacherName, address newTeacherAddress) public payable onlyOwner {
        require(msg.value>=fee);
        msg.sender.transfer(msg.value-fee);

        emit NewTeacher(newTeacherName, newTeacherAddress);
        permission[newTeacherAddress] = 3;
        peepNames[newTeacherAddress] = newTeacherName;
    }

    function withdraw() public onlyOwner {
        owner.transfer(address(this).balance);
    }
    
    function getStudentName(uint studentId) public view returns(string) {
        return students[studentId].name;
    }
    
    function getSize() public view returns(uint){
        return students.length;
    }
}
