package group.demo.Service;

import group.demo.DTO.LocalidadDTO;

import group.demo.Entity.LocalidadEntity;

import group.demo.Repository.LocalidadRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class LocalidadServiceImpl implements LocalidadService {

    private static final Logger log = LoggerFactory.getLogger(LocalidadServiceImpl.class);
    @Autowired
    private LocalidadRepository localidadRepository;


    @Override
    public List<LocalidadDTO> findAll() {
        log.info("PostServiceImpl - findAll: Lista de todos los cliente");
        List<LocalidadDTO> listaLocalidadDTO = localidadRepository.findAll()
                .stream()
                .map(p -> LocalidadDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listaLocalidadDTO;
    }

    @Override
    public LocalidadDTO findById(LocalidadDTO localidadDTO) {
        log.info("ProbleServiceImpl - findById: Buscar cliente por id: " +
                localidadDTO.getId());

        Optional<LocalidadEntity> localidadEntity = localidadRepository.findById(localidadDTO.getId());
        if(localidadEntity.isPresent()) {
            localidadDTO = LocalidadDTO.ConvertToDTO(localidadEntity.get());
            return localidadDTO;
        }else {
            return null;
        }
    }

}
