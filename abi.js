var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "parentName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "parentAddress",
				"type": "address"
			}
		],
		"name": "YesParent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newEmpName",
				"type": "string"
			},
			{
				"name": "newEmpAddress",
				"type": "address"
			}
		],
		"name": "createEmp",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_attendance",
				"type": "uint256"
			},
			{
				"name": "_marks",
				"type": "uint256"
			},
			{
				"name": "_studentAddress",
				"type": "address"
			},
			{
				"name": "_parentAddress",
				"type": "address"
			},
			{
				"name": "_parentName",
				"type": "string"
			},
			{
				"name": "_studentName",
				"type": "string"
			},
			{
				"name": "_course",
				"type": "string"
			},
			{
				"name": "_prof",
				"type": "string"
			}
		],
		"name": "createStudent",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newTeacherName",
				"type": "string"
			},
			{
				"name": "newTeacherAddress",
				"type": "address"
			}
		],
		"name": "createTeacher",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "employStudent",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "finishHW",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "maybeSomething",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "empName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "empAddress",
				"type": "address"
			}
		],
		"name": "StudentEmployed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "studentAddress",
				"type": "address"
			}
		],
		"name": "HWDone",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "newHW",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "string"
			}
		],
		"name": "CourseUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "presentHWCount",
				"type": "uint256"
			}
		],
		"name": "NewHW",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "uint256"
			}
		],
		"name": "AttendanceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "string"
			}
		],
		"name": "ProfUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "uint256"
			}
		],
		"name": "MarksUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "teacherName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "teacherAddress",
				"type": "address"
			}
		],
		"name": "NewTeacher",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "studentName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "studentAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "teacherName",
				"type": "string"
			}
		],
		"name": "NewStudent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "empName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "empAddress",
				"type": "address"
			}
		],
		"name": "NewEmp",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			},
			{
				"name": "newCourse",
				"type": "string"
			},
			{
				"name": "newMarks",
				"type": "uint256"
			},
			{
				"name": "newAttendance",
				"type": "uint256"
			},
			{
				"name": "newProf",
				"type": "string"
			}
		],
		"name": "updateDetails",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSize",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "getStudentParams",
		"outputs": [
			{
				"name": "HWcount",
				"type": "uint256"
			},
			{
				"name": "course",
				"type": "string"
			},
			{
				"name": "marks",
				"type": "uint256"
			},
			{
				"name": "attendance",
				"type": "uint256"
			},
			{
				"name": "employer",
				"type": "string"
			},
			{
				"name": "proficiency",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "studentId",
				"type": "uint256"
			}
		],
		"name": "getStudentPeeps",
		"outputs": [
			{
				"name": "student_name",
				"type": "string"
			},
			{
				"name": "student_address",
				"type": "address"
			},
			{
				"name": "teacher_name",
				"type": "string"
			},
			{
				"name": "teacher_address",
				"type": "address"
			},
			{
				"name": "parent_name",
				"type": "string"
			},
			{
				"name": "parent_address",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"name": "attendance",
				"type": "uint256"
			},
			{
				"name": "marks",
				"type": "uint256"
			},
			{
				"name": "HWcount",
				"type": "uint256"
			},
			{
				"name": "studentAddr",
				"type": "address"
			},
			{
				"name": "teacher",
				"type": "address"
			},
			{
				"name": "parent",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "course",
				"type": "string"
			},
			{
				"name": "employer",
				"type": "string"
			},
			{
				"name": "proficiency",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var address = '0x0463Fd2F77437dDe900C8183BA1a7F25636a746a';
