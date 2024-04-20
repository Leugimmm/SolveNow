package group.demo.DTO;

import group.demo.Entity.LocalidadEntity;

import lombok.Data;

@Data
public class LocalidadDTO {

    private int id;
    private int idC_Autonoma;
    private String ciudad;


    public static LocalidadEntity ConvertToEntity(LocalidadDTO dto){
        LocalidadEntity entity = new LocalidadEntity();
        entity.setId(dto.getId());
        entity.setIdC_Autonoma(dto.getIdC_Autonoma());
        entity.setCiudad(entity.getCiudad());
        return entity;
    }
    public static LocalidadDTO ConvertToDTO(LocalidadEntity entity){
        LocalidadDTO dto = new LocalidadDTO();
        dto.setId(entity.getId());
        dto.setIdC_Autonoma(entity.getIdC_Autonoma());
        dto.setCiudad(entity.getCiudad());
        return dto;
    }
}
