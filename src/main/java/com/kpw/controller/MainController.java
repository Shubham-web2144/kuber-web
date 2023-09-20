package com.kpw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// controller class for mvc
@Controller
public class MainController {
	
	@GetMapping(value = {"/", "/index", "/home"})
	public String getHomePage() {
		return "index";
	}
}
