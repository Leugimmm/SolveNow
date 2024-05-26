package group.demo.Controller;

import group.demo.DTO.PostDTO;
import group.demo.DTO.UsuariosDTO;
import group.demo.Service.UsuariosService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class PerfilController {
    private static final Logger log =
            LoggerFactory.getLogger(PerfilController.class);

    @Autowired
    private UsuariosService usuariosService;

    @GetMapping("/perfil")
    public ModelAndView IniciarSesion(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("./perfil.html");
        return mav;
    }

    @GetMapping("/perfil/{dato}")
    public UsuariosDTO mostrarItiDeUnViaje (@PathVariable("dato") int dato){
        log.info(String.valueOf(dato));
        UsuariosDTO usuariosDTO=new UsuariosDTO();
        usuariosDTO.setId(dato);
        return usuariosService.findById(usuariosDTO);
    }
    // Actualizacion de clientes
    @PutMapping("/update/usu")
    public boolean update(@RequestBody UsuariosDTO usuariosDTO) {
        log.info("ClienteRestController - update: Modificamos el cliente: " + usuariosDTO.getId());
        // Obtenemos el cliente para verificar que existe
        UsuariosDTO clienteExDTO = new UsuariosDTO();
        clienteExDTO.setId(usuariosDTO.getId());
        clienteExDTO = usuariosService.findById(clienteExDTO);
        if(clienteExDTO == null) {
            return false; }
        else {
            usuariosService.save(usuariosDTO);
            return true; }

    }
}
