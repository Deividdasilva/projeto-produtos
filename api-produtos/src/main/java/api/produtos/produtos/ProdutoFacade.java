package api.produtos.produtos;

import api.produtos.categorias.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProdutoFacade {
    @Autowired
    private ProdutoRepository repository;
    @Autowired
    private CategoriaRepository categoriaRepository;  // Injeção do repositório de Categoria

    public ProdutoDTO criar(ProdutoDTO produtoDTO) {
        Produto produto = new Produto();
        produto.setDescricao(produtoDTO.getDescricao());
        produto.setTitulo(produtoDTO.getTitulo());
        produto.setCategoria(categoriaRepository.findById(produtoDTO.getCategoriaId()).orElseThrow(() -> new RuntimeException("Categoria não encontrada")));
        repository.save(produto);
        produtoDTO.setId(produto.getId());
        return produtoDTO;
    }

    public ProdutoDTO atualizar(ProdutoDTO produtoDTO, Long produtoId) {
        Produto produto = repository.findById(produtoId).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        produto.setTitulo(produtoDTO.getTitulo());
        produto.setDescricao(produtoDTO.getDescricao());
        produto.setCategoria(categoriaRepository.findById(produtoDTO.getCategoriaId()).orElseThrow(() -> new RuntimeException("Categoria não encontrada")));
        repository.save(produto);
        return converter(produto);
    }

    public ProdutoDTO getProdutoById(Long produtoId) {
        Optional<Produto> produto = repository.findById(produtoId);
        return produto.map(this::converter).orElse(null);
    }

    public List<ProdutoDTO> getAll() {
        return repository.findAll().stream().map(this::converter).collect(Collectors.toList());
    }

    public String delete(Long produtoId) {
        repository.deleteById(produtoId);
        return "DELETED";
    }

    private ProdutoDTO converter(Produto produto) {
        ProdutoDTO dto = new ProdutoDTO();
        dto.setId(produto.getId());
        dto.setTitulo(produto.getTitulo());
        dto.setDescricao(produto.getDescricao());
        dto.setCategoriaId(produto.getCategoria().getId());
        dto.setCategoriaTitulo(produto.getCategoria() != null ? produto.getCategoria().getTitulo() : null);
        return dto;
    }
}
