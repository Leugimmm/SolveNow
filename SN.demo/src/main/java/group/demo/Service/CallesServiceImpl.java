package group.demo.Service;

import group.demo.DTO.CallesDTO;

import group.demo.Entity.CallesEntity;

import group.demo.Repository.CallesRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CallesServiceImpl implements CallesService {
    private static final Logger log = LoggerFactory.getLogger(CallesServiceImpl.class);
    @Autowired
    private CallesRepository callesRepository;
    @Override
    public List<CallesDTO> findAll() {
        log.info("PostServiceImpl - findAll: Lista de todos los cliente");
        List<CallesDTO> listacaDTO = callesRepository.findAll()
                .stream()
                .map(p -> CallesDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listacaDTO;
    }

    @Override
    public CallesDTO findById(CallesDTO callesDTO) {
        log.info("ProbleServiceImpl - findById: Buscar cliente por id: " +
                callesDTO.getId());

        Optional<CallesEntity> callesEntity = callesRepository.findById(callesDTO.getId());
        if(callesEntity.isPresent()) {
            callesDTO = CallesDTO.ConvertToDTO(callesEntity.get());
            return callesDTO;
        }else {
            return null;
        }
    }
}
