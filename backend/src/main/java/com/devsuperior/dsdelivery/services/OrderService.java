package com.devsuperior.dsdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdelivery.dto.OrderDTO;
import com.devsuperior.dsdelivery.dto.ProductDTO;
import com.devsuperior.dsdelivery.entities.Order;
import com.devsuperior.dsdelivery.entities.OrderStatus;
import com.devsuperior.dsdelivery.entities.Product;
import com.devsuperior.dsdelivery.repositories.OrderRepository;
import com.devsuperior.dsdelivery.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository pRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.FindOrdersWithProducts();
		return list.stream()
				.map(x -> new OrderDTO(x))
				.collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(),
				dto.getLatitude(),
				dto.getLongitude(),
				Instant.now(),
				OrderStatus.PENDING);	// pegar o DTO da requisição e salvar no banco. Instanciar um Order a partir do OrderDTO
		for (ProductDTO p : dto.getProducts()) {	// associar o pedido com os produtos que vieram do DTO, antes de salvar no banco
			Product product = pRepository.getOne(p.getId()); // instancia um produto só que nao vai no banco de dados, criando uma entidade gerenciada pelo JPA para que, quando formos salvar o pedido, ele também salve as associações de quais produtos estão nesse pedido;
			order.getProducts().add(product);
		} // for para percorrer todos os productsDTO e asociando cada produto ao pedido
		order = repository.save(order);	// o save retorna uma referência para o objeto salvo, por isso associamos uma variável para ele
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
