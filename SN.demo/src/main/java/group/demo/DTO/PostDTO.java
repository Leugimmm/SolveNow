package group.demo.DTO;

import group.demo.Entity.PostEntity;

import lombok.Data;

@Data
public class PostDTO {

    private int id;
    private Integer id_Usuario;
    private int id_Calle;
    private int id_problema;
    private String descripcion;
    private String foto;
    private String nivel;
    private String visto;
    private String solucionado;

    public static PostEntity ConvertToEntity(PostDTO dto){
        PostEntity entity = new PostEntity();
        entity.setId(dto.getId());
        entity.setId_Usuario(dto.getId_Usuario());
        entity.setId_Calle(dto.getId_Calle());
        entity.setId_problema(dto.getId_problema());
        entity.setDescripcion(dto.getDescripcion());
        entity.setFoto(dto.getFoto());
        entity.setNivel(dto.getNivel());
        entity.setVisto(dto.getVisto());
        entity.setSolucionado(dto.getSolucionado());
        return entity;
    }
    public static PostDTO ConvertToDTO(PostEntity entity){
        PostDTO dto = new PostDTO();
        dto.setId(entity.getId());
        dto.setId_Usuario(entity.getId_Usuario());
        dto.setId_Calle(entity.getId_Calle());
        dto.setId_problema(entity.getId_problema());
        dto.setDescripcion(entity.getDescripcion());
        dto.setFoto(entity.getFoto());
        dto.setNivel(entity.getNivel());
        dto.setVisto(entity.getVisto());
        dto.setSolucionado(entity.getSolucionado());
        return dto;
    }
}

