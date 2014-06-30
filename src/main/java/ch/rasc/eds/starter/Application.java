package ch.rasc.eds.starter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.filter.CharacterEncodingFilter;

@Configuration
@ComponentScan(basePackages = { "ch.ralscha.extdirectspring", "ch.rasc.eds.starter" })
@EnableAutoConfiguration
public class Application extends SpringBootServletInitializer {

	private static SpringApplicationBuilder configureApp(
			SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return configureApp(application);
	}

	public static void main(String[] args) throws Exception {
		// -Dspring.profiles.active=development
		configureApp(new SpringApplicationBuilder()).run(args);
	}

	@Bean
	public Filter characterEncodingFilter() {
		CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
		characterEncodingFilter.setEncoding(StandardCharsets.UTF_8.name());
		characterEncodingFilter.setForceEncoding(false);
		return characterEncodingFilter;
	}

	@Bean
	@Profile("default")
	public FilterRegistrationBean disableExtCacheFilter() {
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setUrlPatterns(Arrays.asList("/", "/index.html"));
		frb.setFilter(new Filter() {

			@Override
			public void init(FilterConfig filterConfig) throws ServletException {
				// nothing here
			}

			@Override
			public void doFilter(ServletRequest request, ServletResponse response,
					FilterChain chain) throws IOException, ServletException {
				Cookie cookie = new Cookie("ext-cache", "1");
				((HttpServletResponse) response).addCookie(cookie);
				chain.doFilter(request, response);
			}

			@Override
			public void destroy() {
				// nothing here
			}
		});

		return frb;
	}

}