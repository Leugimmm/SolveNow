package group.demo.Controller;

import group.demo.DTO.PostDTO;
import group.demo.Service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class IndexController {
    private static final Logger log =
            LoggerFactory.getLogger(IndexController.class);
    @Autowired
    private PostService postService;
    @RequestMapping("/api/todosPost")
    public List<PostDTO> findAll() {

        log.info("ClienteRestController - findAll: Mostramos todos los clientes");

        List<PostDTO> listaPostDTO = postService.findAll();
        return listaPostDTO;
    }

}
