package br.unitins.ecommerce.service.estado;

import java.util.List;

import br.unitins.ecommerce.dto.estado.EstadoDTO;
import br.unitins.ecommerce.dto.estado.EstadoResponseDTO;
import br.unitins.ecommerce.model.endereco.Estado;

public interface EstadoService {
    
    List<EstadoResponseDTO> getAll(int page, int pageSize);
    
    Estado getById(Long id);

    Estado insert(EstadoDTO estadoDto);

    Estado update(Long id, EstadoDTO estadoDto);

    void delete(Long id);

    List<EstadoResponseDTO> getByNome(String nome, int page, int pageSize);

    Long count();

    Long countByNome(String nome);
}
