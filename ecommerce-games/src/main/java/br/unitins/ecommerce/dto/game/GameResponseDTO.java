package br.unitins.ecommerce.dto.game;

import java.time.format.DateTimeFormatter;
import java.util.List;

import br.unitins.ecommerce.dto.developer.DeveloperResponseDTO;
import br.unitins.ecommerce.dto.genero.GeneroResponseDTO;
import br.unitins.ecommerce.dto.plataforma.PlataformaResponseDTO;
import br.unitins.ecommerce.model.produto.Game;

public record GameResponseDTO(
    Long id,
    String nome,
    String descricao,
    Double preco,
    String anoLancamento,
    DeveloperResponseDTO developer,
    List<GeneroResponseDTO> generos,
    List<PlataformaResponseDTO> plataformas
) {

    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    
    public GameResponseDTO (Game game, DateTimeFormatter formatter) {

        this(game.getId(), game.getNome(), game.getDescricao(), game.getPreco(), game.getAnoLancamento().format(formatter), new DeveloperResponseDTO(game.getDeveloper()), game.getGeneros().stream().map(GeneroResponseDTO::new).toList(), game.getPlataformas().stream().map(PlataformaResponseDTO::new).toList());
    }

    public GameResponseDTO (Game game) {

        this(game.getId(), game.getNome(), game.getDescricao(), game.getPreco(), game.getAnoLancamento().format(formatter), new DeveloperResponseDTO(game.getDeveloper()), game.getGeneros().stream().map(GeneroResponseDTO::new).toList(), game.getPlataformas().stream().map(PlataformaResponseDTO::new).toList());
    }
}
