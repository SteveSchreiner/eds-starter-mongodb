package ch.rasc.eds.starter.service;

import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_MODIFY;
import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_READ;

import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.bean.ExtDirectStoreReadRequest;
import ch.ralscha.extdirectspring.bean.ExtDirectStoreResult;
import ch.ralscha.extdirectspring.filter.StringFilter;
import ch.rasc.eds.starter.bean.User;
import ch.rasc.eds.starter.repository.UserRepository;
import ch.rasc.edsutil.RepositoryUtil;

@Service
public class UserService {

	private final UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@ExtDirectMethod(STORE_READ)
	public ExtDirectStoreResult<User> read(ExtDirectStoreReadRequest storeRequest) {

		String filterValue = null;
		if (!storeRequest.getFilters().isEmpty()) {
			StringFilter filter = (StringFilter) storeRequest.getFilters().iterator()
					.next();
			filterValue = filter.getValue();
		}

		Page<User> usersPage;

		if (StringUtils.hasText(filterValue)) {
			filterValue = Pattern.quote(filterValue);
			usersPage = userRepository.findByEmailLike(filterValue,
					RepositoryUtil.createPageable(storeRequest));
		}
		else {
			usersPage = userRepository.findAll(RepositoryUtil
					.createPageable(storeRequest));
		}

		return new ExtDirectStoreResult<>(usersPage.getTotalElements(),
				usersPage.getContent());
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<User> create(User newUser) {
		newUser.setId(null);
		User insertedUser = userRepository.save(newUser);
		System.out.println("NEW USER: " + insertedUser.getId());
		return new ExtDirectStoreResult<>(insertedUser);
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<User> update(User updatedUser) {
		User savedUser = userRepository.save(updatedUser);
		return new ExtDirectStoreResult<>(savedUser);
	}

	@ExtDirectMethod(STORE_MODIFY)
	public void destroy(User destroyUser) {
		System.out.println("DESTROY USER: " + destroyUser);
		userRepository.delete(destroyUser);
	}

}
