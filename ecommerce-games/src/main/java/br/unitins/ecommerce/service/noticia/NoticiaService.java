package br.unitins.ecommerce.service.noticia;

import java.util.List;

import br.unitins.ecommerce.dto.noticia.NoticiaDTO;
import br.unitins.ecommerce.dto.noticia.NoticiaResponseDTO;

public interface NoticiaService {
    
    List<NoticiaResponseDTO> getAll();
    
    NoticiaResponseDTO getById(Long id);

    NoticiaResponseDTO insert(NoticiaDTO noticiaDTO);

    NoticiaResponseDTO update(Long id, NoticiaDTO noticiaDTO);

    void delete(Long id);
}
