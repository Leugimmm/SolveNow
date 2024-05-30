package group.demo.Controller;

import group.demo.DTO.PostDTO;
import group.demo.Service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class ProblemaController {
    private static final Logger log =
            LoggerFactory.getLogger(ProblemaController.class);
    @Autowired
    private PostService postService;

    @GetMapping("/problema")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./problema.html");
        return mav;
    }

    @GetMapping("/problema/{dato}")
    public PostDTO mostrarItiDeUnViaje (@PathVariable("dato") String dato){
        log.info(dato);
        PostDTO postDTO=new PostDTO();
        postDTO.setId(Integer.parseInt(dato));
        log.info(String.valueOf(postDTO));
        return postService.findById(postDTO);
    }
    @PostMapping("/api/update")
    public boolean comprobarUsuario (@RequestBody PostDTO postDTO){
        log.info(String.valueOf(postDTO));
        postService.update(postDTO);
        return true;
    }
}
