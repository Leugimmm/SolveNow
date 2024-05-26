package group.demo.DTO;

import group.demo.Entity.ProblemasEntity;

import lombok.Data;

@Data
public class ProblemasDTO {
    private int id;
    private String problema;
    public static ProblemasEntity ConvertToEntity(ProblemasDTO dto){
        ProblemasEntity entity = new ProblemasEntity();
        entity.setId(dto.getId());
        entity.setProblema(dto.getProblema());
        return entity;
    }
    public static ProblemasDTO ConvertToDTO(ProblemasEntity entity){
        ProblemasDTO dto = new ProblemasDTO();
        dto.setId(entity.getId());
        dto.setProblema(entity.getProblema());
        return dto;
    }
}
