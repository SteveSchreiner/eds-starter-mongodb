package ch.rasc.eds.starter.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "departments")
@TypeAlias("d")
public class Department {

	@Id
	private String id;

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Department() {
		// default constructor
	}

	public Department(String name) {
		this.name = name;
	}

}
