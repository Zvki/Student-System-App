package polsl.bartosz.sosnica.studentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polsl.bartosz.sosnica.studentsystem.model.Student;

@Repository
public interface StudentRepository  extends JpaRepository<Student, Integer> {
}
