package group.demo.Service;


import group.demo.DTO.ProblemasDTO;

import java.util.List;

public interface ProblemasService {
    List<ProblemasDTO> findAll();
    ProblemasDTO findById(ProblemasDTO problemasDTO);
}
