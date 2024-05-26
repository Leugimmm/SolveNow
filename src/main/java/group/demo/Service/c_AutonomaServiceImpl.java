package group.demo.Service;

import group.demo.DTO.LocalidadDTO;
import group.demo.DTO.c_AutonomaDTO;

import group.demo.Repository.c_AutonomaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class c_AutonomaServiceImpl implements c_AutonomaService{
    private static final Logger log = LoggerFactory.getLogger(c_AutonomaServiceImpl.class);
    @Autowired
    private c_AutonomaRepository c_autonomaRepository;
    @Override
    public List<c_AutonomaDTO> findAll() {
        log.info("PostServiceImpl - findAll: Lista de todos los cliente");
        List<c_AutonomaDTO> listaAutoDTO = c_autonomaRepository.findAll()
                .stream()
                .map(p -> c_AutonomaDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listaAutoDTO;
    }

    @Override
    public c_AutonomaDTO findById(c_AutonomaDTO c_autonomaDTO) {
        return null;
    }
}
