package group.demo.Service;

import group.demo.DTO.CallesDTO;
import group.demo.DTO.UsuariosDTO;

import java.util.List;

public interface CallesService {
    List<CallesDTO> findAll();
    CallesDTO findById(CallesDTO callesDTO);

}
