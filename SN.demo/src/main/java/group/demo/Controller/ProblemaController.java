package group.demo.Controller;

import group.demo.DTO.PostDTO;
import group.demo.Service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin(origins = "http://35.180.138.214:8888")
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
}
