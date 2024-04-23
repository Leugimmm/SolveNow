package group.demo.Service;

import group.demo.DTO.PostDTO;
import group.demo.Entity.PostEntity;
import group.demo.Repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{
    private static final Logger log = LoggerFactory.getLogger(PostServiceImpl.class);
    @Autowired
    private PostRepository postRepository;
    @Override
    public List<PostDTO> findAll() {
        log.info("PostServiceImpl - findAll: Lista de todos los cliente");
        List<PostDTO> listaPostDTO = postRepository.findAll()
                .stream()
                .map(p -> PostDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listaPostDTO;
    }

    @Override
    public PostDTO findById(PostDTO postDTO) {
        log.info("ProbleServiceImpl - findById: Buscar cliente por id: " +
                postDTO.getId());

        Optional<PostEntity> postEntity = postRepository.findById(postDTO.getId());
        if(postEntity.isPresent()) {
            postDTO = PostDTO.ConvertToDTO(postEntity.get());
            return postDTO;
        }else {
            return null;
        }
    }

    @Override
    public void save(PostDTO postDTO) {
        log.info("ClienteServiceImpl - save: Salvamos el cliente: " +
                postDTO.toString());

        PostEntity postEntity = PostDTO.ConvertToEntity(postDTO);
        postRepository.save(postEntity);
    }
}
