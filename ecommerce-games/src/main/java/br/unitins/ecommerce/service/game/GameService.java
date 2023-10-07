package br.unitins.ecommerce.service.game;

import java.util.List;

import br.unitins.ecommerce.dto.game.GameDTO;
import br.unitins.ecommerce.dto.game.GameResponseDTO;

public interface GameService {
    
    List<GameResponseDTO> getAll();
    
    GameResponseDTO getById(Long id);

    GameResponseDTO insert(GameDTO gameDTO);

    GameResponseDTO update(Long id, GameDTO gameDTO);

    void delete(Long id);
}
