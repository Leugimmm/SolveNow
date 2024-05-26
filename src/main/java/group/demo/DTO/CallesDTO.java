package group.demo.DTO;

import group.demo.Entity.CallesEntity;

import lombok.Data;

@Data
public class CallesDTO {
    private int id;

    private int id_localidad;

    private String calle;

    public static CallesEntity ConvertToEntity(CallesDTO dto){
        CallesEntity entity = new CallesEntity();
        entity.setId(dto.getId());
        entity.setId_localidad(dto.getId_localidad());
        entity.setCalle(dto.getCalle());
        return entity;
    }
    public static CallesDTO ConvertToDTO(CallesEntity entity){
        CallesDTO dto = new CallesDTO();
        dto.setId(entity.getId());
        dto.setId_localidad(entity.getId_localidad());
        dto.setCalle(entity.getCalle());
        return dto;
    }
}
