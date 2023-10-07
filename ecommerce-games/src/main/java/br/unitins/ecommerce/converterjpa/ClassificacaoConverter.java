package br.unitins.ecommerce.converterjpa;

import br.unitins.ecommerce.model.produto.developer.Classificacao;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class ClassificacaoConverter implements AttributeConverter<Classificacao, String> {
    
    @Override
    public String convertToDatabaseColumn(Classificacao classificacao) {

        return classificacao == null ? null : classificacao.toString();
    }

    @Override
    public Classificacao convertToEntityAttribute(String label) {

        return label == null ? null : Classificacao.valueOf(label);
    }
}
