package br.unitins.ecommerce.service.usuario;

import java.util.List;

import br.unitins.ecommerce.dto.usuario.UsuarioDTO;
import br.unitins.ecommerce.dto.usuario.UsuarioResponseDTO;

public interface UsuarioService {
    
    List<UsuarioResponseDTO> getAll();

    UsuarioResponseDTO getById(Long id);

    UsuarioResponseDTO insert(UsuarioDTO usuarioDto);

    UsuarioResponseDTO update(Long id, UsuarioDTO usuarioDto);

    List<UsuarioResponseDTO> findByNome(String nome, int page, int pageSize);

    void delete(Long id);

    long count();

        long countByNome(String nome);
}
