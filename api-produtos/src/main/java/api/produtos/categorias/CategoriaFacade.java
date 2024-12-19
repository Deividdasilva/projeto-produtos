package api.produtos.categorias;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoriaFacade {
    @Autowired
    private CategoriaRepository repository;


    // Converter para DTO
    private CategoriaDTO convertToDto(Categoria categoria) {
        CategoriaDTO dto = new CategoriaDTO();
        dto.setId(categoria.getId());
        dto.setTitulo(categoria.getTitulo());
        return dto;
    }

    // Converter de DTO para entidade
    private Categoria convertToEntity(CategoriaDTO dto) {
        Categoria categoria = new Categoria();
        categoria.setId(dto.getId());
        categoria.setTitulo(dto.getTitulo());
        return categoria;
    }

    public CategoriaDTO criar(CategoriaDTO categoriaDTO) {
        Categoria categoria = convertToEntity(categoriaDTO);
        categoria = repository.save(categoria);
        return convertToDto(categoria);
    }

    public CategoriaDTO atualizar(Long id, CategoriaDTO categoriaDTO) {
        Categoria categoria = repository.findById(id).orElse(null);
        if (categoria != null) {
            categoria.setTitulo(categoriaDTO.getTitulo());
            categoria = repository.save(categoria);
        }
        return convertToDto(categoria);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public CategoriaDTO getCategoriaById(Long id) {
        Categoria categoria = repository.findById(id).orElse(null);
        return categoria != null ? convertToDto(categoria) : null;
    }

    public List<CategoriaDTO> getAllCategorias() {
        return repository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public String delete(Long categoriaId) {
        repository.deleteById(categoriaId);
        return "DELETED";
    }
}
