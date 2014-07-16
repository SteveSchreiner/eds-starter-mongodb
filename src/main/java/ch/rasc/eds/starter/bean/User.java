package ch.rasc.eds.starter.bean;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import ch.rasc.extclassgenerator.Model;
import ch.rasc.extclassgenerator.ModelField;

@Model(value = "SimpleApp.model.User", rootProperty = "records",
		createMethod = "userService.create", readMethod = "userService.read",
		updateMethod = "userService.update", destroyMethod = "userService.destroy")
@Document(collection = "users")
@TypeAlias("user")
public class User {

	@Id
	private String id;

	@ModelField(convert = "null")
	private String firstName;

	@NotNull
	@ModelField(convert = "null")
	private String lastName;

	@Email
	@ModelField(convert = "null")
	private String email;

	@ModelField(convert = "null")
	private String department;

	public User() {
		// default constructor
	}

	public User(String firstName, String lastName, String email, String department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.department = department;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDepartment() {
		return department;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", email=" + email + ", department=" + department + "]";
	}

}
