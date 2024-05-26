package group.demo.DTO;

import group.demo.Entity.c_AutonomaEntity;
import lombok.Data;
@Data
public class c_AutonomaDTO {

    private int id;
    private String c_autonoma;
    public static c_AutonomaEntity ConvertToEntity(c_AutonomaDTO dto){
        c_AutonomaEntity entity = new c_AutonomaEntity();
        entity.setId(dto.getId());
        entity.setC_autonoma(dto.getC_autonoma());
        return entity;
    }
    public static c_AutonomaDTO ConvertToDTO(c_AutonomaEntity entity){
        c_AutonomaDTO dto = new c_AutonomaDTO();
        dto.setId(entity.getId());
        dto.setC_autonoma(entity.getC_autonoma());
        return dto;
    }
}
