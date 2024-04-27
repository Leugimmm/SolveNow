package group.demo.Controller;

import group.demo.DTO.UsuariosDTO;
import group.demo.Service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class LoginController {

    @Autowired
    private UsuariosService usuariosService;

    @GetMapping("/login")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./inicio-sesion.html");
        return mav;
    }

    @PostMapping("/api/iniciosesion")
    public boolean comprobarUsuario (@RequestBody UsuariosDTO usuariosDTO){
        if (!usuariosDTO.getEmail().matches("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")){
            return false;
        }
        if (!usuariosDTO.getPassword().matches( "^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10})$")){
            return false;
        }
        if(usuariosService.findUsuario(usuariosDTO.getEmail(), usuariosDTO.getPassword()) == null ){
            return false;
        }
        return true;
    }

    @PostMapping("/api/obtenerusuario")
    public UsuariosDTO obtenerusuario (@RequestBody UsuariosDTO usuariosDTO){
        return usuariosService.findUsuario(usuariosDTO.getEmail(), usuariosDTO.getPassword());
    }
}
