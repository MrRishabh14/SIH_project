const studentList = document.getElementById('student-list');
const markPresentButton = document.getElementById('mark-present');
const markAbsentButton = document.getElementById('mark-absent');

// Sample student data (replace with actual data)
const students = [
    { name: 'John Doe', present: false },
    { name: 'Jane Smith', present: false },
    { name: 'shikhar', present: true }

    // ... more students
];

// Function to update the student list UI
function updateStudentList() {
    studentList.innerHTML = ''; // Clear the list
    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} (${student.present ? 'Present' : 'Absent'})`;
        studentList.appendChild(listItem);
    });
}

// Event listeners for attendance buttons
markPresentButton.addEventListener('click', () => {
    students.forEach(student => student.present = true);
    updateStudentList();
});

markAbsentButton.addEventListener('click', () => {
    students.forEach(student => student.present = false);
    updateStudentList();
});

// Initialize the student list
updateStudentList();


// ... other section functionalities (presentations, Q&A, resources)