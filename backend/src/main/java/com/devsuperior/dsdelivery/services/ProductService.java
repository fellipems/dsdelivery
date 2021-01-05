package com.devsuperior.dsdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdelivery.dto.ProductDTO;
import com.devsuperior.dsdelivery.entities.Product;
import com.devsuperior.dsdelivery.repositories.ProductRepository;

@Service	// service para meio de campo entre o controlador e camada de acesso a dados
public class ProductService {

	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true)		// garantir a transação e fechar conexão com banco; readOnly para operação somente de leitura e evitar o Lock de escrita no banco
	public List<ProductDTO> findAll() {  // retornará um DTO(carrega somente os dados que mandarmos)
		List<Product> list = repository.findAllByOrderByNameAsc();	// o serviço chamará o repository
		return list.stream().map(x -> new ProductDTO(x))   // .map aplica uma função para todos os elementos da lista, transformando-os em uma nova lista
				.collect(Collectors.toList());	// reconverter a stream para uma lista novamente
	}
}
