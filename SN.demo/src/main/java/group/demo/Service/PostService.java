package group.demo.Service;

import group.demo.DTO.PostDTO;


import java.util.List;

public interface PostService {
    List<PostDTO> findAll();
    PostDTO findById(PostDTO postDTO);
    void save(PostDTO postDTO);
    List<PostDTO> filtrado(String respuesta);
    public void update(PostDTO postDTO);
    public void delete(PostDTO postDTO);
}
