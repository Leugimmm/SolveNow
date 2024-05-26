package group.demo.Service;

import group.demo.DTO.UsuariosDTO;
import group.demo.DTO.c_AutonomaDTO;

import java.util.List;

public interface c_AutonomaService {
    List<c_AutonomaDTO> findAll();
    c_AutonomaDTO findById(c_AutonomaDTO c_autonomaDTO);

}
