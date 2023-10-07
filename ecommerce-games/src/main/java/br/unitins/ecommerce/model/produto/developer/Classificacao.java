package br.unitins.ecommerce.model.produto.developer;

public enum Classificacao {
    
    FIRST_PARTY(1, "First Party"),
    SECOND_PARTY(2, "Second Party"),
    THIRD_PARTY(3, "Third Party"),
    INDIE(4, "Indie");

    private int id;
    private String label;

    Classificacao (int id, String label) {

        this.id = id;
        this.label = label;
    }

    public int getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public static Classificacao valueOf (Integer id) throws IllegalArgumentException {

        if (id == null)
            return null;

        for (Classificacao classificacao : Classificacao.values()) {

            if (id == classificacao.id)
                return classificacao;
        }

        throw new IllegalArgumentException("Número fora das opções disponíveis");
    }
}
