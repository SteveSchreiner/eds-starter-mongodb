package ch.rasc.eds.starter.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import ch.rasc.eds.starter.bean.User;

public interface UserRepository extends MongoRepository<User, String> {
	Page<User> findByEmailLike(String email, Pageable pageable);
}
