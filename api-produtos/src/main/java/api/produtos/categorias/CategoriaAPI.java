package api.produtos.categorias;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/categorias")
public class CategoriaAPI {
    @Autowired
    private CategoriaFacade facade;

    @PostMapping
    public ResponseEntity<CategoriaDTO> criar(@RequestBody CategoriaDTO categoriaDTO) {
        CategoriaDTO created = facade.criar(categoriaDTO);
        return ResponseEntity.ok(created);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> getCategoriaById(@PathVariable Long id) {
        CategoriaDTO categoriaDTO = facade.getCategoriaById(id);
        return categoriaDTO != null ? ResponseEntity.ok(categoriaDTO) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoriaDTO> atualizar(@PathVariable Long id, @RequestBody CategoriaDTO categoriaDTO) {
        CategoriaDTO updated = facade.atualizar(id, categoriaDTO);
        return ResponseEntity.ok(updated);
    }

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> getAllCategorias() {
        List<CategoriaDTO> categorias = facade.getAllCategorias();
        return ResponseEntity.ok(categorias);
    }

    @DeleteMapping("/{categoriaId}")
    @ResponseBody
    public String deletar(@PathVariable("categoriaId") Long categoriaId) {
        try {
            return facade.delete(categoriaId);
        } catch (Exception e) {
            return "Erro ao deletar categoria: " + e.getMessage();
        }
    }

}
