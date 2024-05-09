package group.demo.Controller;

import group.demo.DTO.PostDTO;
import group.demo.DTO.c_AutonomaDTO;
import group.demo.Service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/")
public class IndexController {
    private static final Logger log =
            LoggerFactory.getLogger(IndexController.class);
    @Autowired
    private PostService postService;

    @GetMapping("/")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./index.html");
        return mav;
    }

    @GetMapping("/api/post")
    public List<PostDTO> getAuto(){
        return postService.findAll();
    }

}
