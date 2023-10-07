package br.unitins.ecommerce.dto.usuario;

import java.util.List;

import br.unitins.ecommerce.model.usuario.Usuario;

public record UsuarioResponseDTO(
    Long id,
    String nome,
    String cpf,
    String email,
    String login,
    String senha,
    String perfil,
    List<TelefoneResponseDTO> telefones
) {

    public UsuarioResponseDTO (Usuario usuario, String perfil) {

        this(usuario.getId(), usuario.getNome(), usuario.getCpf(), usuario.getEmail(), usuario.getLogin(), usuario.getSenha(), perfil != null? perfil : usuario.getPerfil().getLabel(), usuario.getTelefones().stream().map(TelefoneResponseDTO::new).toList());
    }
}
