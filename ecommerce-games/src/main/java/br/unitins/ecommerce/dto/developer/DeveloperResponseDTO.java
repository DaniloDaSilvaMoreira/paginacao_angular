package br.unitins.ecommerce.dto.developer;

import java.time.format.DateTimeFormatter;

import br.unitins.ecommerce.model.produto.developer.Developer;

public record DeveloperResponseDTO(Long id, String nome, String anoFundacao, String classificacao) {

    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    
    public DeveloperResponseDTO (Developer developer, DateTimeFormatter formatter, String classificacao) {

        this(developer.getId(), developer.getNome(), developer.getAnoFundacao().format(formatter), classificacao);
    }

    public DeveloperResponseDTO (Developer developer) {

        this(developer.getId(), developer.getNome(), developer.getAnoFundacao().format(formatter), developer.getClassificacao().getLabel());
    }
}
