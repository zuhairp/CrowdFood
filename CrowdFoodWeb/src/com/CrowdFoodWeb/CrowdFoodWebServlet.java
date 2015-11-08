package com.CrowdFoodWeb;

import java.io.IOException;

import javax.servlet.http.*;

import com.googlecode.objectify.ObjectifyService;

@SuppressWarnings("serial")
public class CrowdFoodWebServlet extends HttpServlet {
	static{
		ObjectifyService.register(User.class);
		ObjectifyService.register(Food.class);
	}
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
