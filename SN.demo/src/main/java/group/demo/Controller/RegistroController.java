package group.demo.Controller;

import group.demo.DTO.UsuariosDTO;
import group.demo.Service.UsuariosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class RegistroController {

    private static final Logger log =
            LoggerFactory.getLogger(RegistroController.class);
    @Autowired
    private UsuariosService usuariosService;
    @GetMapping("/regi")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./regitro.html");
        return mav;
    }
    @PostMapping("/api/registro")
    public boolean comprobarUsuario (@RequestBody UsuariosDTO usuariosDTO){
        log.info(String.valueOf(usuariosDTO));
        if (!usuariosDTO.getEmail().matches("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")){
            return false;
        }
        if (!usuariosDTO.getPassword().matches("^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)")){
            return false;
        }
        if (usuariosDTO.getNombre().matches("")){
            return false;
        }
        if(!(usuariosService.findUsuario(usuariosDTO.getEmail(), usuariosDTO.getPassword()) == null)){
            return false;
        }
        usuariosDTO.setRol("Usuario");


        usuariosService.save(usuariosDTO);
        return true;
    }
    @PostMapping("/api/cambio")
    public boolean camUsuario (@RequestBody UsuariosDTO usuariosDTO){
        log.info(String.valueOf(usuariosDTO));
        if (!usuariosDTO.getEmail().matches("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")){
            return false;
        }
        if (!usuariosDTO.getPassword().matches("^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)")){
            return false;
        }
        if (usuariosDTO.getNombre().matches("")){
            return false;
        }

        usuariosService.save(usuariosDTO);
        return true;
    }
}
