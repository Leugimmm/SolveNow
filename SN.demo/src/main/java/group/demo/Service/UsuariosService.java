package group.demo.Service;

import group.demo.DTO.UsuariosDTO;

import java.util.List;

public interface UsuariosService {
    List<UsuariosDTO> findAll();
    UsuariosDTO findById(UsuariosDTO usuariosDTO);
    void save(UsuariosDTO usuariosDTO);
    UsuariosDTO findUsuario( String correo ,  String password);
    public void delete(UsuariosDTO usuariosDTO);
}
