package br.unitins.ecommerce.dto.usuario;

import br.unitins.ecommerce.model.usuario.Telefone;

public record TelefoneResponseDTO(String codigoArea, String numero) {
    
    public TelefoneResponseDTO (Telefone telefone) {

        this(telefone.getCodigoArea(), telefone.getNumero());
    }
}
