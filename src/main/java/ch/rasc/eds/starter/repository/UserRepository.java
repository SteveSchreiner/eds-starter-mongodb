package ch.rasc.eds.starter.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import ch.rasc.eds.starter.bean.User;

public interface UserRepository extends MongoRepository<User, String> {

	List<User> findByDepartmentOrderByLastNameAsc(String department);

	Page<User> findByFirstNameStartsWithIgnoreCaseOrLastNameStartsWithIgnoreCaseOrEmailStartsWithIgnoreCase(
			String firstName, String lastName, String email, Pageable pageable);

}
