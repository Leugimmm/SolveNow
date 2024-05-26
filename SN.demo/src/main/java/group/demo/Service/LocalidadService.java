package group.demo.Service;

import group.demo.DTO.LocalidadDTO;
import group.demo.DTO.UsuariosDTO;

import java.util.List;

public interface LocalidadService {
    List<LocalidadDTO> findAll();
    LocalidadDTO findById(LocalidadDTO localidadDTO);

}
