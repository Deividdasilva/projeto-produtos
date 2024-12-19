package api.produtos.produtos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/produtos", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProdutoAPI {
    @Autowired
    private ProdutoFacade produtoFacade;

    @PostMapping
    @ResponseBody
    public ProdutoDTO criar(@RequestBody ProdutoDTO produtoDTO) {
        return produtoFacade.criar(produtoDTO);
    }

    @PutMapping("/{produtoId}")
    @ResponseBody
    public ProdutoDTO atualizar(@PathVariable("produtoId") Long produtoId,
                               @RequestBody ProdutoDTO produtoDTO) {
        return produtoFacade.atualizar(produtoDTO, produtoId);
    }

    @GetMapping("/{produtoId}")
    public ResponseEntity<ProdutoDTO> getProdutoById(@PathVariable("produtoId") Long produtoId) {
        ProdutoDTO produto = produtoFacade.getProdutoById(produtoId);
        if (produto != null) {
            return ResponseEntity.ok(produto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping
    @ResponseBody
    public List<ProdutoDTO> getAll() {
        return produtoFacade.getAll();
    }

    @DeleteMapping("/{produtoId}")
    @ResponseBody
    public String deletar(@PathVariable("produtoId") Long produtoId) {
        return produtoFacade.delete(produtoId);
    }
}
