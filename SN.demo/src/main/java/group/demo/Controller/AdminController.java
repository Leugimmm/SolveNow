package group.demo.Controller;

import group.demo.DTO.PostDTO;
import group.demo.DTO.ProblemasDTO;
import group.demo.DTO.UsuariosDTO;
import group.demo.Service.UsuariosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://solucionaya.es/")
public class AdminController {
    private static final Logger log =
            LoggerFactory.getLogger(AdminController.class);

    @Autowired
    private UsuariosService usuariosService;
    @GetMapping("/api/users")
    public List<UsuariosDTO> getPro(){
        return usuariosService.findAll();
    }
    @GetMapping("/admin")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./panelAdmin.html");
        return mav;
    }
    @PostMapping("/api/deleteUsu")
    public boolean delete (@RequestBody UsuariosDTO usuariosDTO){
        usuariosService.delete(usuariosDTO);
        return true;
    }

}
