package group.demo.DTO;

import group.demo.Entity.UsuariosEntity;

import lombok.Data;

import java.io.Serializable;

@Data
public class UsuariosDTO implements Serializable {

    private int id;
    private String rol;
    private String nombre;
    private String foto;
    private String descripcion;
    private String email;
    private String password;
    private int id_Autonoma;
    private int id_Localidad;

    public static UsuariosEntity ConvertToEntity(UsuariosDTO dto){
        UsuariosEntity entity = new UsuariosEntity();
        entity.setId(dto.getId());
        entity.setRol(dto.getRol());
        entity.setNombre(dto.getNombre());
        entity.setFoto(dto.getFoto());
        entity.setDescripcion(dto.getDescripcion());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setId_Autonoma(dto.getId_Autonoma());
        entity.setId_Localidad(dto.getId_Localidad());
        return entity;
    }
    public static UsuariosDTO ConvertToDTO(UsuariosEntity entity){
        UsuariosDTO dto = new UsuariosDTO();
        dto.setId(entity.getId());
        dto.setRol(entity.getRol());
        dto.setNombre(entity.getNombre());
        dto.setFoto(entity.getFoto());
        dto.setDescripcion(entity.getDescripcion());
        dto.setEmail(entity.getEmail());
        dto.setPassword(entity.getPassword());
        dto.setId_Autonoma(entity.getId_Autonoma());
        dto.setId_Localidad(entity.getId_Localidad());
        return dto;
    }
}
