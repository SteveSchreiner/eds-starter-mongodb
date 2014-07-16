package ch.rasc.eds.starter;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.regex.Pattern;
import java.util.zip.Inflater;
import java.util.zip.InflaterInputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import ch.rasc.eds.starter.bean.User;
import ch.rasc.eds.starter.repository.UserRepository;

@Component
public class InitialDataLoad {

	private final UserRepository userRepository;

	@Autowired
	public InitialDataLoad(UserRepository userRepository) throws IOException {
		this.userRepository = userRepository;
		init(new ClassPathResource("randomdata.csv.compressed"));
	}

	private void init(ClassPathResource randomDataResource) throws IOException {
		if (userRepository.count() == 0) {

			try (InputStream is = randomDataResource.getInputStream();
					BufferedReader reader = new BufferedReader(new InputStreamReader(
							new InflaterInputStream(is, new Inflater(true)),
							StandardCharsets.UTF_8))) {
				reader.lines().map(line -> line.split(Pattern.quote("|")))
						.map(s -> new User(s[0], s[1], s[2], s[3]))
						.forEach(user -> userRepository.save(user));
			}
		}

	}

}
