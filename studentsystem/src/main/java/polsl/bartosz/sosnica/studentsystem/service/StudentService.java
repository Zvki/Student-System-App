package polsl.bartosz.sosnica.studentsystem.service;

import polsl.bartosz.sosnica.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
