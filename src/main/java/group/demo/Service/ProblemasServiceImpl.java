package group.demo.Service;

import group.demo.DTO.ProblemasDTO;

import group.demo.Entity.ProblemasEntity;

import group.demo.Repository.ProblemasRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProblemasServiceImpl implements ProblemasService{
    private static final Logger log = LoggerFactory.getLogger(ProblemasService.class);
    @Autowired
    private ProblemasRepository problemasRepository;
    @Override
    public List<ProblemasDTO> findAll() {
        log.info("ProbleServiceImpl - findAll: Lista de todos los cliente");
        List<ProblemasDTO> listaProblemasDTO = problemasRepository.findAll()
                .stream()
                .map(p -> ProblemasDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listaProblemasDTO;
    }

    @Override
    public ProblemasDTO findById(ProblemasDTO problemasDTO) {
        log.info("ProbleServiceImpl - findById: Buscar cliente por id: " +
                problemasDTO.getId());

        Optional<ProblemasEntity> problemasEntity = problemasRepository.findById(problemasDTO.getId());
        if(problemasEntity.isPresent()) {
            problemasDTO = ProblemasDTO.ConvertToDTO(problemasEntity.get());
            return problemasDTO;
        }else {
            return null;
        }
    }
}
