package com.devsuperior.dsdelivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdelivery.dto.ProductDTO;
import com.devsuperior.dsdelivery.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {	// responseEntity encapsula uma resposta de uma requisição HTTP. Tipo do corpo da resposta será uma lista de produtosDto
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);	// body do corpo da nossa resposta será nossa lista de produtos
	}
}
